'use client';

import {useEffect, useRef} from 'react';

const planLayers = [
  {
    // Grid axes and dimension lines.
    color: '#FEF7F138', strokeWidth: 0.85, start: 0, duration: 650, length: 580,
    paths: [
      'M30 94H542', 'M30 256H542', 'M76 25V378', 'M333 25V378', 'M510 25V378',
      'M76 45V19M510 45V19M76 30H510M71 35L81 25M505 35L515 25',
      'M56 94H22M56 351H22M34 94V351M29 99L39 89M29 356L39 346',
      'M76 351V379M333 351V379M76 369H333M71 374L81 364M328 374L338 364',
    ],
  },
  {
    // Exterior walls and the setback of the lower wing.
    color: '#FEF7F145', strokeWidth: 1.35, start: 230, duration: 1000, length: 1500,
    paths: [
      'M157 351H76V94H233V58H510V298H344V351H203',
      'M157 342H85V103H242V67H501V289H335V342H203',
    ],
  },
  {
    // Partitions, door swings, windows and stair treads.
    color: '#FEF7F134', strokeWidth: 1, start: 650, duration: 930, length: 420,
    paths: [
      'M242 103V153M242 195V252H298M340 252H501',
      'M85 252H157M203 252H242V342',
      'M242 153H284A42 42 0 0 1 242 195',
      'M298 252V210A42 42 0 0 1 340 252',
      'M203 342V296A46 46 0 0 0 157 342',
      'M103 98H183M285 62H389M505 101V186M360 294H461',
      'M355 99H405V213H355ZM355 113H405M355 127H405M355 141H405M355 156H405M355 170H405M355 184H405M355 199H405M380 203V111L374 118M380 111L386 118',
      'M110 128H185V165H110ZM110 165V185H146V165',
    ],
  },
  {
    // Section reference and alignment marks in the brand accent.
    color: '#EF753F86', strokeWidth: 1.15, start: 1140, duration: 900, length: 530,
    paths: [
      'M50 122H107M121 122H147M161 122H187M201 122H227M241 122H267M281 122H307M321 122H347M361 122H387M401 122H427M441 122H467M481 122H538',
      'M50 117V127M538 117V127M76 25V35M71 30H81M505 30H515M510 25V35',
      'M68 86H84V102H68ZM502 86H518V102H502ZM325 248H341V264H325Z',
    ],
  },
];

const drawingDuration = 2040;

export default function HeroPlan() {
  const plan = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = plan.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context || typeof Path2D === 'undefined') return;

    const layers = planLayers.map(layer => ({
      ...layer, paths: layer.paths.map(path => new Path2D(path)),
    }));
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobile = window.matchMedia('(max-width: 950px)');
    const started = performance.now();
    let elapsed = motion.matches ? drawingDuration : 0;
    let frame = 0;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;

    const paint = () => {
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, width, height);
      const scale = mobile.matches ? Math.min(1.18, width / 545) : Math.min(1.55, width / 1090, height / 415);
      context.translate(
        mobile.matches ? width * 0.24 : Math.max(0, (width - 1360) / 2) - 22,
        mobile.matches ? 0 : Math.max(16, (height - 400 * scale) / 2),
      );
      context.scale(scale, scale);
      for (const layer of layers) {
        const progress = Math.min(1, (elapsed - layer.start) / layer.duration);
        if (progress <= 0) continue;
        context.strokeStyle = layer.color;
        context.lineWidth = layer.strokeWidth;
        context.setLineDash(progress === 1 ? [] : [layer.length, layer.length]);
        context.lineDashOffset = layer.length * (1 - progress) ** 2;
        for (const path of layer.paths) context.stroke(path);
      }
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(width * pixelRatio));
      canvas.height = Math.max(1, Math.round(height * pixelRatio));
      paint();
    };

    const draw = (now: number) => {
      elapsed = Math.min(drawingDuration, now - started);
      paint();
      if (elapsed < drawingDuration) frame = requestAnimationFrame(draw);
    };

    const finishOnReducedMotion = () => {
      if (!motion.matches) return;
      cancelAnimationFrame(frame);
      elapsed = drawingDuration;
      paint();
    };

    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(resize);
    resize();
    if (observer) observer.observe(canvas);
    else window.addEventListener('resize', resize);
    if (!motion.matches) frame = requestAnimationFrame(draw);
    motion.addEventListener('change', finishOnReducedMotion);

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener('resize', resize);
      motion.removeEventListener('change', finishOnReducedMotion);
    };
  }, []);

  return <div className="rd-hero-plan" aria-hidden="true"><canvas ref={plan} /></div>;
}
