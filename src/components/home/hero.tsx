import React from 'react';
import hero_image from '../../assets/mary_bg.jpg'
import Image from 'next/image';

export default function HomeHero() {
    return (
        <section className=' flex justify-between items-center w-full p-12'>
            <div>
                <h1 className=' text-4xl font-extrabold'>Mater Dei College</h1>
            </div>
            <div className=' hidden lg:block'>
                <Image src={hero_image} alt='Mary and heart of thorns' width={300} loading='lazy'/>
            </div>
            
        </section>
    )
}
