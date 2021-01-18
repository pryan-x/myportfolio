import React from 'react';
import '../styles/Card.css'
// projectNumber, projectName, projectDescription, githubLink, siteLink
export default function Card (props) {
    return (
        <div className='card-container'>
        <p className='project-name'>{props.projectName}</p>
        <div className='card'>
            {props.projectImage && 
                <div className='image-container'>
                    <div className='links'>
                    <a className='project-links' href={`${props.githubLink}`}>
                    <img className='github' src={require('../resources/github-logo.png')} />
                    </a>
                    {props.siteLink ?  <a  className='project-links' href={`${props.siteLink}`}><img className='website-link' src={require('../resources/link.png')} /></a> : false }
                    </div>
                    <img className='project-image' src={require(`../resources/${props.projectImage}`)}/>
                </div>
            }
            <div className='description-container'
                style={{
                    maxWidth: props.projectImage ? '500px' : '1000px',
                    margin: props.projectImage ? '0 30px' : '0 60px'
                }}
            >
                {/* <p className='description'>Description:</p> */}
            <p className='description-text'>{props.projectDescription}</p>
            <p className='description-text'>{props.projectDescription2}</p>
            </div>
            
            </div>
        </div>
    )
}