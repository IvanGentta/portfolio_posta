export default function Inicio() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center space-y-6">
      <h1 className="font-titulo text-4xl md:text-8xl">
        <span className="pulse">{`\${`}</span>Iván.Gentta
        <span className="pulse">{`}`}</span>
      </h1>
      <h2 className="font-titulo text-xl md:text-4xl max-w-2xl">
        <span className="pulse">{`<h2>`}</span>Welcome to my Web Developer
        portfolio.<span className="pulse">{`</h2>`}</span>
      </h2>
    </div>
  );
}
