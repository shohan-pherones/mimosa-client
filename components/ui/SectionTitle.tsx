interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className='mb-20'>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;
