interface Props {
  toggle: boolean;
  text: string;
  color: string;
}

export const FieldErrorParagraph: React.FC<Props> = ({ toggle, text, color }) => {
  return (
    <p className={`text-sm mt-1 ${color} ${toggle ? 'visible' : 'invisible'}`}>
      {text || 'I am invisible'}
    </p>
  );
};
