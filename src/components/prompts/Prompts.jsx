import React from 'react';
import './Prompts.main.css';

const prompts = [
  {
    title: 'Enchanted Forest Landscape',
    description: `Imagine a magical enchanted forest at sunrise, with beams of sunlight filtering through the dense canopy of ancient trees. The forest floor is carpeted with vibrant wildflowers in shades of blue and violet, and a gentle mist hovers above a winding stream. In the distance, a majestic stag with luminous antlers stands gracefully. The scene is peaceful and surreal, blending realism and fantasy with a soft, ethereal glow. High resolution, detailed textures, and vibrant colors.`,
  },
  {
    title: 'Futuristic Cityscape at Night',
    description: `A breathtaking futuristic cityscape at night, with towering skyscrapers adorned with neon lights of blue and pink. Flying cars zip between buildings, and bustling streets below are filled with people and colorful digital billboards. A shimmering river reflects the city lights, adding a sense of calmness to the urban environment. The atmosphere is both energetic and awe-inspiring, with a focus on intricate details, reflections, and a cyberpunk aesthetic.`,
  },
  {
    title: 'Serene Beach Sunset',
    description: `Capture a serene beach scene at sunset, where the sky is ablaze with shades of orange, pink, and purple. Gentle waves lap at the pristine sandy shore, and palm trees sway softly in the warm breeze. In the foreground, a hammock is tied between two trees, inviting relaxation. The horizon showcases a silhouette of distant islands. The image exudes tranquility and warmth, with realistic textures and a focus on light and shadow interplay.`,
  },
  {
    title: 'Mystical Mountain Range',
    description: `Depict a mystical mountain range enveloped in low-lying clouds, with rugged peaks piercing through the mist. Snow-capped summits glisten in the soft light of dawn, and a serene alpine lake mirrors the majestic scene. In the foreground, a meadow filled with colorful wildflowers adds vibrancy to the landscape. The atmosphere is serene and otherworldly, combining photorealism with a touch of fantasy. High detail and dramatic lighting are emphasized.`,
  },
  {
    title: 'Fantasy Underwater World',
    description: `Visualize a fantastical underwater world teeming with life, where coral reefs in vivid colors stretch as far as the eye can see. Exotic fish, sea turtles, and jellyfish glide gracefully through the water, and rays of sunlight penetrate the surface, creating a dance of light and shadow. In the distance, the silhouette of a submerged ancient city adds a sense of mystery. The scene is vibrant and dynamic, with attention to detail and a sense of wonder.`,
  },
  // Add more prompts here as needed
];

function Prompts() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log('Copied to clipboard successfully!');
        alert('Prompt copied to clipboard!');
      },
      (err) => {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy prompt.');
      }
    );
  };

  return (
    <div className='mainDiv'>
      <div>
        <h2>Try this :</h2>
      </div>
      {prompts.map((prompt, index) => (
        <div className='promptSec' key={index}>
          <h3>{index + 1}. {prompt.title}</h3>
          <h4>Prompt:</h4>
          <p>{prompt.description}</p>
          <span className='copyPrompt' onClick={() => copyToClipboard(prompt.description)}>Copy Prompt</span>
        </div>
      ))}
    </div>
  );
}

export default Prompts;
