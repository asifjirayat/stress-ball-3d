# Interactive Stress Ball 3D

A satisfying and realistic 3D stress ball built with React Three Fiber that responds to your interactions with different materials, physics, and particle effects.

#### Live Demo: [https://stress-ball-3d.vercel.app/](https://stress-ball-3d.vercel.app/)

## Features

- Interactive Physics
- Realistic squishing - Click and hold to compress the stress ball
- Smooth animations - 60fps performance with fluid scaling transitions
- Touch-friendly - Works perfectly on mobile devices

## Multiple Material Types

- Rubber Ball - Quick compression with fast bounce-back
- Gel Ball - Deep compression with slow, flowing recovery
- Memory Foam - Deep indentation with very slow return

## Visual & Audio Feedback

- Particle effects - White particles burst from the ball when squeezed
- Sound feedback - Satisfying squish sound on interaction
- Color changes - Materials darken when compressed
- Smooth material switching - Live physics updates when changing ball types

## Built With

- React - UI framework
- React Three Fiber - React renderer for Three.js
- Three.js - 3D graphics library
- Vite - Build tool and dev server

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

Clone the repository

```bash
git clone https://github.com/asifjirayat/stress-ball-3d
cd stress-ball-3d
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Open your browser

http://localhost:5173

### Optional: Add Sound Effects

- Create a public/sounds/ folder
- Add a squish.mp3 or squish.wav file for audio feedback
- The app will automatically use the sound if present

## How to Use

- Choose a material - Click the buttons to switch between Rubber, Gel, and Memory Foam
- Interact - Click and hold anywhere on the 3D ball to squeeze it
- Experience - Watch the ball compress, see particles fly, and hear the satisfying squish
- Experiment - Try different materials to feel their unique physics behaviors

## Project Structure

```bash
stress-ball-3d/
├── index.html
├── public/
│   └── sounds/
│       └── squish.wav
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── Scene.jsx
│   │   └── StressBallMaterials.jsx
│   ├── index.css
│   └── main.jsx
```

## Technical Implementation

### State Management

Uses React's built-in useState hooks for:

- Current material selection
- Ball pressed state
- Particle system state
- Audio playback control

### Material System

Each stress ball material has unique properties:

- squishScale - How much the ball compresses (0.6-0.8)
- bounceSpeed - How fast it returns to shape (0.05-0.15)
- roughness & metalness - Visual material properties
- color & pressedColor - Normal and compressed colors

### Physics Animation

Smooth interpolation for realistic physics using:

```bash
 mesh.current.scale.x += (targetScale - mesh.current.scale.x) * speed
```

### Particle System

- Spawns 6 particles on each interaction
- Particles fade out over ~1 second using life property
- Random positioning around the ball for natural effect

### Performance Optimizations

- React.memo() for component optimization
- Efficient particle cleanup with filter()
- 60fps animations using useFrame()

## Features in Detail

### Rubber Ball Physics

- Quick compression to 80% size
- Fast bounce-back (0.15 speed)
- Slightly glossy appearance
- Blue color scheme

### Gel Ball Physics

- Deep compression to 60% size
- Slow recovery (0.08 speed)
- Matte finish
- Green color scheme

### Memory Foam Physics

- Medium compression to 70% size
- Very slow return (0.05 speed)
- Completely matte surface
- Yellow/orange color scheme

## Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new materials or effects
- Improve performance
- Add new interaction modes

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React Three Fiber - Amazing React renderer for Three.js
- Three.js - Powerful 3D graphics library
- Vercel - Seamless deployment platform

Made with ❤️ and React Three Fiber

Live Demo - [https://stress-ball-3d.vercel.app/](https://stress-ball-3d.vercel.app/)
