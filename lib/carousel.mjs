export function slideIndex(index,direction,count){return (index+direction+count)%count;}
export function readingInterval(paragraph){return Math.min(20000,Math.max(6000,Math.ceil(paragraph.trim().split(/\s+/).length/3+2)*1000));}
export function rotationAllowed({manualPause,interaction,expanded,reducedMotion,visible,documentVisible}){return !manualPause&&!interaction&&!expanded&&!reducedMotion&&visible&&documentVisible;}
