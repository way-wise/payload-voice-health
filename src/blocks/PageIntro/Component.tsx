import { PageIntroBlockProps } from './config'

export const PageIntroBlock: React.FC<PageIntroBlockProps> = ({
  title,
  description,
  backgroundImage,
}) => {
  return (
    <section className="relative h-[304px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage.url})` }}
      />
      <div className="absolute inset-0 bg-[#5F46CF] opacity-70" />
      <div className="relative w-full h-full flex justify-center items-center">
        <div className="text-center flex flex-col gap-4 text-white w-full max-w-[720px] mx-auto">
          <h1 className="text-6xl font-bold">{title}</h1>
          {description && <p className="text-xl text-white text-center">{description}</p>}
        </div>
      </div>
    </section>
  )
}
