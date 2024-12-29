import React from 'react'

const Hero = () => {
  return (
    <section 
        id="home"
        className="pt-28 lg:pt-36"
    >

        <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
            <div>
                <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h-9 rounded-lg">
                        <img 
                        src="/images/profile.jpg"
                        width={40}
                        height={40}
                        alt="Yasas Lekamge Portrait"
                        className="img-cover" 
                        />
                    </figure>
                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                        </span>
                        Available for work
                    </div>
                </div>
                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                    Building Scalable Modern Websites for the Future
                </h2>
                <div className="">
                    ButtonPrimary

                    ButtonOutline
                </div>
            </div>

            <div className="">
                <figure className="">
                    <img 
                    src="/images/microsoft.jpg"
                    width={656}
                    height={800} 
                    alt="Yasas Lekamge" 
                    className="w-full" 
                    // className="w-[656px] h-[490px]"
                    />
                </figure>
            </div>

        </div>

    </section>
  )
}

export default Hero