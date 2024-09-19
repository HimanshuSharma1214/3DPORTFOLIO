import React from 'react'
import { BallCanvas } from './canvas'
import { profiles } from '../constants'


const Profiles = () => {

    return (
        <div className='flex flex-row flex-wrap justify-center gap-10'>
            <div className='w-28 h-28'>
                <a href='https://www.linkedin.com/in/himanshu-sharma-583a131ba/'target='_blank'>
                    <img
                        src='src\assets\linkedinlogo.webp'
                        className="w-20 h-20"
                        style={{
                            borderRadius: '50px',
                            border: '1px solid rgb(145, 94, 255)'
                        }}
                    />
                </a>
            </div>
            <div className='w-28 h-28'>
                <a href='https://leetcode.com/u/Himanshu0401010/' target='_blank'>
                    <img
                        src='src\assets\leetcode.png'
                        className="w-20 h-20"
                        style={{
                            padding:'0px',
                            borderRadius: '50px',
                            border: '1px solid rgb(145, 94, 255)'
                        }}
                    />

                </a>
                
            </div>
            <div className='w-28 h-28'>
                <a href='https://www.naukri.com/code360/profile/ed3a1b6f-2e91-4fd9-90ec-9edfad6a3483'target='_blank'>
                    <img
                        src='src\assets\Coding_Ninjas_logo.jpeg'
                        className="w-20 h-20"
                        style={{
                            
                            borderRadius: '50px',
                            border: '1px solid rgb(145, 94, 255)'
                        }}
                    />

                </a>
            </div>
            <div className='w-28 h-28'>
                <a href='https://github.com/HimanshuSharma1214' target='_blank'>
                    <img
                        src='src\assets\gitlogo.png'
                        className="w-20 h-20"
                        style={{
                            borderRadius: '50px',
                            border: '1px solid rgb(145, 94, 255)'
                        }}
                    />
                </a>
            </div>
        </div>

    )
}

export default Profiles
