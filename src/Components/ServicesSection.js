import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext';
import Title from '../Components/Title'
import ServiceCard from './ServiceCard';

import animation from '../img/icons/3dAnimation.svg'
import artificialIntelligence from '../img/icons/artificial_intelligence.svg'
import gameDevelopment from '../img/icons/game_dev.svg'
import emergencySoftware from '../img/icons/emergency.svg'
import globalTeaching from '../img/icons/global.svg'
import videoProduction from '../img/icons/video_production.svg'

function ServicesSection() {
    const theme = useTheme()
    return (
        <ServicesSectionStyled className='u-pad-lg-2' theme={theme}>
            <div className="title-con">
                <Title 
                    name={'Services'}
                    subtext="At our agency, we offer a wide range of services to help businesses succeed in today's fast-paced digital world. Our services include:
                    "
                />
            </div>

            <div className="services-con">
                <ServiceCard 
                    title={'3d Animation'}
                    desc={'We specialize in creating high-quality 3D animations that bring ideas to life and captivate audiences. Our experienced team of designers and animators work closely with our clients to ensure that their vision is accurately represented in the final product.'}
                    icon={animation}
                />
                <ServiceCard
                    title="Artificial Intelligence"
                    desc="We specialize in creating high-quality 3D animations that bring ideas to life and captivate audiences. Our experienced team of designers and animators work closely with our clients to ensure that their vision is accurately represented in the final product."
                    icon={artificialIntelligence}
                />
                <ServiceCard
                    title="Game Development"
                    desc="We specialize in creating high-quality 3D animations that bring ideas to life and captivate audiences. Our experienced team of designers and animators work closely with our clients to ensure that their vision is accurately represented in the final product."
                    icon={gameDevelopment}
                />
                <ServiceCard
                    title="Emergency Software"
                    desc="We develop custom emergency software solutions that help organizations respond to crises quickly and effectively. Our emergency software solutions are designed to be user-friendly, reliable, and scalable, ensuring that they can be used in a wide range of emergency situations."
                    icon={emergencySoftware}
                />
                <ServiceCard
                    title="Global Teaching"
                    desc="We offer online global teaching services that enable students from all over the world to learn from experienced teachers in a variety of subjects. Our platform is designed to be easy to use and accessible to students of all ages and backgrounds."
                    icon={globalTeaching}
                />
                <ServiceCard
                    title="Video Production"
                    desc="We produce high-quality videos for a range of purposes, including marketing, training, and entertainment. Our team of experienced videographers, editors, and producers work closely with our clients to ensure that their vision is accurately represented in the final product."
                    icon={videoProduction}
                />
            </div>
        </ServicesSectionStyled>
    )
}

const ServicesSectionStyled = styled.section`
    .services-con{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        grid-gap: 2rem;
        padding-top: 3rem;
    }
`;

export default ServicesSection;