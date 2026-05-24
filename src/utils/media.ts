export function getVideoEmbed(url: string): string {
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;

  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;

  return url;
}

export function getYouTubeThumbnail(url: string): string | undefined {
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (yt) return `https://img.youtube.com/vi/${yt[1]}/maxresdefault.jpg`;
  return undefined;
}

export function getAudioEmbed(url: string): { type: 'spotify' | 'soundcloud' | 'direct'; src: string } {
  if (url.includes('open.spotify.com')) {
    const src = url
      .replace('open.spotify.com/track/', 'open.spotify.com/embed/track/')
      .replace('open.spotify.com/album/', 'open.spotify.com/embed/album/')
      .replace('open.spotify.com/playlist/', 'open.spotify.com/embed/playlist/');
    return { type: 'spotify', src };
  }

  if (url.includes('soundcloud.com')) {
    const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23c0392b&auto_play=false&hide_related=true&show_comments=false&show_user=true`;
    return { type: 'soundcloud', src };
  }

  return { type: 'direct', src: url };
}
