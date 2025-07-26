export default function ParticleBackground() {
  const particles = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    left: `${(i + 1) * 10}%`,
    delay: `${i * 2}s`,
    color: i % 3 === 0 ? '#00ff88' : i % 3 === 1 ? '#ff0080' : '#00d4ff'
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full opacity-70 animate-particle"
          style={{
            left: particle.left,
            backgroundColor: particle.color,
            animationDelay: particle.delay
          }}
        />
      ))}
    </div>
  );
}
