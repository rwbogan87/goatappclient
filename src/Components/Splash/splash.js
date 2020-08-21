import React from 'react'
import './splash.css'

// Trophy Splash Page

const Splash=()=>{

    let spanStyle = {
        'font-size': `1em`, 
        'font-weight': `800`,
        'color': 'white',
        'position': 'relative',
        'margin': '0 auto',
        'padding': '0'
    }

    return(
        <div className="trophycase">
        <div className="singletrophy">
            <i class="fas fa-trophy" id="trophy"></i>
            <span class="fa-layers-text" data-fa-transform="shrink-8 down-3" style={spanStyle}>2013</span>
        </div>
        <div className="singletrophy">
            <i class="fas fa-trophy" id="trophy"></i>
            <span class="fa-layers-text" data-fa-transform="shrink-8 down-3" style={spanStyle}>2014</span>
        </div>
        <div className="singletrophy">
            <i class="fas fa-trophy" id="trophy"></i>
            <span class="fa-layers-text" data-fa-transform="shrink-8 down-3" style={spanStyle}>2015</span>
        </div>
        <div className="singletrophy">
            <i class="fas fa-trophy" id="trophy"></i>
            <span class="fa-layers-text" data-fa-transform="shrink-8 down-3" style={spanStyle}>2016</span>
        </div>
        <div className="singletrophy">
            <i class="fas fa-trophy" id="trophy"></i>
            <span class="fa-layers-text" data-fa-transform="shrink-8 down-3" style={spanStyle}>2017</span>
        </div>
        </div>
    )
}

export default Splash;
