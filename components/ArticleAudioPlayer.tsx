"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type AudioSection = {
  title: string;
  paragraphs: string[];
  list?: string[];
};

type ArticleAudioPlayerProps = {
  title: string;
  excerpt: string;
  intro: string;
  sections: AudioSection[];
};

type PlayerState = "idle" | "playing" | "paused" | "completed";

const RATE_STORAGE_KEY = "ravyt_article_audio_rate";

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M8.5 5.5 18 12l-9.5 6.5Z" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M8 6v12M16 6v12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function PreviousIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7 6v12M18 7l-8 5 8 5Z" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M17 6v12M6 7l8 5-8 5Z" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function RestartIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M6.2 8.1A7 7 0 1 1 5 14" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M6 4.8v4.1h4.1" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SoundIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 10v4h3l4 3V7l-4 3H5Z" fill="currentColor" />
      <path d="M15 9.2a4 4 0 0 1 0 5.6M17.5 7a7 7 0 0 1 0 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function ArticleAudioPlayer({
  title,
  excerpt,
  intro,
  sections,
}: ArticleAudioPlayerProps) {
  const chunks = useMemo(() => {
    const articleChunks = [
      { label: "Título do artigo", text: title },
      { label: "Resumo", text: excerpt },
      { label: "Introdução", text: intro },
    ];

    sections.forEach((section) => {
      articleChunks.push({ label: section.title, text: section.title });
      section.paragraphs.forEach((paragraph) => {
        articleChunks.push({ label: section.title, text: paragraph });
      });
      section.list?.forEach((item) => {
        articleChunks.push({ label: section.title, text: item });
      });
    });

    return articleChunks;
  }, [excerpt, intro, sections, title]);

  const [supported, setSupported] = useState(true);
  const [playerState, setPlayerState] = useState<PlayerState>("idle");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rate, setRate] = useState(1);
  const [status, setStatus] = useState("Pronto para ouvir");
  const currentIndexRef = useRef(0);
  const rateRef = useRef(1);
  const sessionRef = useRef(0);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const speakIndexRef = useRef<(index: number, shouldCancel?: boolean) => void>(() => undefined);

  const choosePortugueseVoice = useCallback(() => {
    const voices = window.speechSynthesis.getVoices();
    return (
      voices.find((voice) => voice.lang.toLowerCase() === "pt-br") ??
      voices.find((voice) => voice.lang.toLowerCase().startsWith("pt"))
    );
  }, []);

  const speakIndex = useCallback(
    (index: number, shouldCancel = true) => {
      if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) return;

      const safeIndex = Math.min(Math.max(index, 0), chunks.length - 1);
      const synthesis = window.speechSynthesis;
      const session = sessionRef.current;

      if (shouldCancel) synthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(chunks[safeIndex].text);
      const voice = choosePortugueseVoice();
      if (voice) utterance.voice = voice;
      utterance.lang = voice?.lang ?? "pt-BR";
      utterance.rate = rateRef.current;
      utterance.pitch = 1;
      utterance.volume = 1;
      utteranceRef.current = utterance;
      currentIndexRef.current = safeIndex;
      setCurrentIndex(safeIndex);
      setPlayerState("playing");
      setStatus(`Lendo: ${chunks[safeIndex].label}`);

      utterance.onend = () => {
        if (session !== sessionRef.current) return;

        const nextIndex = safeIndex + 1;
        if (nextIndex < chunks.length) {
          window.setTimeout(() => speakIndexRef.current(nextIndex, false), 45);
          return;
        }

        utteranceRef.current = null;
        setPlayerState("completed");
        setStatus("Leitura concluída");
      };

      utterance.onerror = (event) => {
        if (session !== sessionRef.current || event.error === "canceled" || event.error === "interrupted") return;
        utteranceRef.current = null;
        setPlayerState("paused");
        setStatus("A leitura foi interrompida. Pressione continuar para retomar.");
      };

      window.setTimeout(() => {
        if (session === sessionRef.current) synthesis.speak(utterance);
      }, shouldCancel ? 60 : 0);
    },
    [choosePortugueseVoice, chunks],
  );

  useEffect(() => {
    speakIndexRef.current = speakIndex;
  }, [speakIndex]);

  useEffect(() => {
    const hasSpeech = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
    const storedRate = Number(window.localStorage.getItem(RATE_STORAGE_KEY));
    if ([0.75, 1, 1.25, 1.5].includes(storedRate)) {
      rateRef.current = storedRate;
    }

    const initialStateTimer = window.setTimeout(() => {
      setSupported(hasSpeech);
      if ([0.75, 1, 1.25, 1.5].includes(storedRate)) setRate(storedRate);
    }, 0);

    return () => {
      window.clearTimeout(initialStateTimer);
      sessionRef.current += 1;
      if (hasSpeech) window.speechSynthesis.cancel();
    };
  }, []);

  const handlePlayPause = () => {
    if (!supported) return;

    if (playerState === "playing") {
      window.speechSynthesis.pause();
      setPlayerState("paused");
      setStatus("Leitura pausada");
      return;
    }

    if (playerState === "paused" && window.speechSynthesis.paused && utteranceRef.current) {
      window.speechSynthesis.resume();
      setPlayerState("playing");
      setStatus(`Lendo: ${chunks[currentIndexRef.current].label}`);
      return;
    }

    sessionRef.current += 1;
    speakIndex(playerState === "completed" ? 0 : currentIndexRef.current);
  };

  const moveTo = (index: number) => {
    sessionRef.current += 1;
    speakIndex(index);
  };

  const handleRestart = () => {
    currentIndexRef.current = 0;
    moveTo(0);
  };

  const handleRateChange = (newRate: number) => {
    rateRef.current = newRate;
    setRate(newRate);
    window.localStorage.setItem(RATE_STORAGE_KEY, String(newRate));

    if (playerState === "playing") {
      sessionRef.current += 1;
      speakIndex(currentIndexRef.current);
    } else if (playerState === "paused") {
      sessionRef.current += 1;
      window.speechSynthesis.cancel();
      utteranceRef.current = null;
      setStatus("Velocidade ajustada. Pressione continuar para retomar.");
    }
  };

  const progress = playerState === "idle" ? 0 : playerState === "completed" ? 100 : Math.round(((currentIndex + 1) / chunks.length) * 100);
  const mainActionLabel = playerState === "playing" ? "Pausar leitura" : playerState === "paused" ? "Continuar leitura" : playerState === "completed" ? "Ouvir novamente" : "Ouvir artigo";

  if (!supported) {
    return (
      <section className="article-audio article-audio-unsupported" aria-label="Ouvir artigo">
        <div className="article-audio-symbol"><SoundIcon /></div>
        <div>
          <p>Ouça este artigo</p>
          <span>Seu navegador não oferece leitura em voz alta. Você ainda pode usar o leitor de tela do dispositivo para acompanhar o conteúdo.</span>
        </div>
      </section>
    );
  }

  return (
    <section className="article-audio" aria-labelledby="article-audio-title" aria-describedby="article-audio-help">
      <div className="article-audio-head">
        <div className="article-audio-symbol"><SoundIcon /></div>
        <div>
          <p id="article-audio-title">Prefere ouvir?</p>
          <h2>Escute este artigo</h2>
          <span id="article-audio-help">Use os controles para pausar, avançar e ajustar a velocidade da leitura.</span>
        </div>
        <span className="article-audio-badge">Acessibilidade</span>
      </div>

      <div className="article-audio-progress">
        <div
          className="article-audio-progress-track"
          role="progressbar"
          aria-label="Progresso da leitura"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          aria-valuetext={`Trecho ${currentIndex + 1} de ${chunks.length}`}
        >
          <i style={{ width: `${progress}%` }} />
        </div>
        <div className="article-audio-progress-copy">
          <span>{chunks[currentIndex].label}</span>
          <small>{progress}%</small>
        </div>
      </div>

      <div className="article-audio-controls">
        <button
          className="article-audio-skip"
          type="button"
          onClick={() => moveTo(Math.max(0, currentIndexRef.current - 1))}
          disabled={playerState === "idle" || currentIndex === 0}
          aria-label="Voltar um trecho"
          title="Voltar um trecho"
        >
          <PreviousIcon />
        </button>

        <button
          className="article-audio-play"
          type="button"
          onClick={handlePlayPause}
          aria-label={mainActionLabel}
          aria-pressed={playerState === "playing"}
        >
          {playerState === "playing" ? <PauseIcon /> : <PlayIcon />}
          <span>{mainActionLabel}</span>
        </button>

        <button
          className="article-audio-skip"
          type="button"
          onClick={() => moveTo(Math.min(chunks.length - 1, currentIndexRef.current + 1))}
          disabled={playerState === "idle" || currentIndex === chunks.length - 1}
          aria-label="Avançar um trecho"
          title="Avançar um trecho"
        >
          <NextIcon />
        </button>

        <button
          className="article-audio-restart"
          type="button"
          onClick={handleRestart}
          aria-label="Reiniciar leitura"
          title="Reiniciar leitura"
        >
          <RestartIcon />
          <span>Reiniciar</span>
        </button>

        <label className="article-audio-rate">
          <span>Velocidade</span>
          <select value={rate} onChange={(event) => handleRateChange(Number(event.target.value))} aria-label="Velocidade da leitura">
            <option value={0.75}>0,75×</option>
            <option value={1}>1×</option>
            <option value={1.25}>1,25×</option>
            <option value={1.5}>1,5×</option>
          </select>
        </label>
      </div>

      <p className="article-audio-status" aria-live="polite" aria-atomic="true">{status}</p>
    </section>
  );
}
