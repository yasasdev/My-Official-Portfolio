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
                    <div className="">
                        <span className="">
                            <span className=""></span>
                        </span>
                        Available for work
                    </div>
                </div>
                <h2 className="">
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
                    />
                </figure>
            </div>

        </div>

    </section>
  )
}

export default Hero