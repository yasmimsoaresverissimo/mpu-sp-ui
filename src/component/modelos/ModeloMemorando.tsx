import React, { useState } from "react";
import Input from "../../compenentes-compartilhados/Input/Input";

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onConcatenatedValueChange: (value: string) => void;
  onConcatenateButtonClick?: () => void; // Nova propriedade para lidar com o clique no botão de concatenação
}

function ModeloMemorando({ onChange, onConcatenatedValueChange, onConcatenateButtonClick }: InputProps) {
  const [interessado, setInteressado] = useState("");
  const [numeroReferencia, setNumeroReferencia] = useState("");
  const [concatenatedValue, setConcatenatedValue] = useState("");

  const handleInteressadoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInteressado(event.target.value);
    onChange(event);
  };

  const handleNumeroReferenciaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumeroReferencia(event.target.value);
    onChange(event);
  };

  const concatenateValues = () => {
    const concatenatedString = interessado + " - " + numeroReferencia;
    setConcatenatedValue(concatenatedString);
    onConcatenatedValueChange(concatenatedString);
  };

  return (
    <div>
      <Input label="Interessado" onChange={handleInteressadoChange} />
      <Input label="Numero de referencia" onChange={handleNumeroReferenciaChange} />
    </div>
  );
}

export default ModeloMemorando;
