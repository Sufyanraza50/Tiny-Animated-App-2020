import React, { useRef } from 'react';
import useWebAnimations, { bounce } from '@wellyshen/use-web-animations';
import './Features.css';

const Features = () => {

    const { keyframes, timing } = bounce;
    const { ref } = useWebAnimations({
        keyframes,
        timing: {
            ...timing,
            delay: 1000, // Delay 1s
            duration: timing.duration * 2.75, // Speed up the animation
            iterations: Infinity,
            fill: 'forwards'
        },
    });

    return (
        <section id="features">

            <div class="row" ref={ref}>
                <div class="col-lg-4 feature-box">
                    <i class="icon fas fa-check-circle fa-4x"></i>
                    <h3>Easy to use.</h3>
                    <p>So easy to use, even your dog could do it.</p>
                </div>
                <div class="col-lg-4 feature-box">
                    <i class="icon fas fa-bullseye fa-4x"></i>
                    <h3>Elite Clientele</h3>
                    <p>We have all the dogs, the greatest dogs.</p>
                </div>
                <div class="col-lg-4 feature-box">
                    <i class="icon fas fa-heart fa-4x"></i>
                    <h3>Guaranteed to work.</h3>
                    <p>Find the love of your dog's life or your money back.</p>
                </div>
            </div>

        </section>

    )
}

export default Features;
