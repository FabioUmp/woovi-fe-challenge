type CtaProps = {
    title: string
}

function Cta({ title }: CtaProps) {
  return (
    <div className="text-center">
      <p className="pt-2 text-xl font-bold text-black-500 font-medium">{title}</p>
    </div>
  )
};

export default Cta;
