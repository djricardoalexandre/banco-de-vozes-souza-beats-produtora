type AvatarStyle = 'adventurer' | 'avataaars' | 'big-ears' | 'big-ears-neutral' | 'bottts' | 'croodles' | 'micah' | 'pixel-art' | 'lorelei';

export function generateAvatarUrl(seed: string, style: AvatarStyle): string {
  const styleMap: Record<AvatarStyle, string> = {
    'avataaars': 'avataaars',
    'big-ears': 'big-ears',
    'big-ears-neutral': 'big-ears-neutral',
    'bottts': 'bottts',
    'croodles': 'croodles',
    'micah': 'micah',
    'pixel-art': 'pixel-art',
    'lorelei': 'lorelei',
    'adventurer': 'adventurer-neutral',
  };

  const avatarStyle = styleMap[style];
  const encodedSeed = encodeURIComponent(seed);

  return `https://api.dicebear.com/8.x/${avatarStyle}/svg?seed=${encodedSeed}&scale=75`;
}
