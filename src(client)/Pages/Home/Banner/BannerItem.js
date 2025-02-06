import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import './BannerItem.css';

const BannerItem = ({slide}) => {
    const {image, prev, id, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt='' className="w-full" />
            </div>
            <div className="absolute flex left-24 top-24">
                <h1 className='font-bold text-6xl text-white'>
                    Affordable <br />
                    Rent Car And Hire Driver or <br />
                    join As a Driver
                </h1>
            </div>
            <div className="absolute flex left-24 top-1/2 w-1/2">
                <p className=' text-lg text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex left-24 gap-5 top-3/4">
                <button className="btn btn-active btn-secondary">Discover More</button>
                <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
            <div className="absolute flex justify-end gap-4 right-12 bottom-12">
                <a href={`#slide${prev}`} className="btn btn-circle text-white border-none text-lg bg-fuchsia-700"><FiArrowLeft></FiArrowLeft></a>
                <a href={`#slide${next}`} className="btn btn-circle text-white border-none text-lg bg-fuchsia-700"><FiArrowRight></FiArrowRight></a>
            </div>
        </div>
    );
};

export default BannerItem;