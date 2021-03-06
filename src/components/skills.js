import React from "react"

const data1 = [
    'JAVA', 
    'C', 
    'HTML', 
    'SQL', 
    'React JS', 
    'React Native',
    'CSS',
    'Electron JS',
    'selenium',
    'PWA',
    'Javascript(Programming Language)',
];

const data2 = [
    'Gatsby JS',
    'Flask',
    'Material UI',
    'Express',
    'Github',
    'Redux',
    'unit testing',
    'Integration testing',
    'Python(Programming Language)', 
];

export default function Skills(){
    return (
        <div className="skills">
            <p className="title">Skills & Endorsements</p>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%', height: 'auto'}}>
                <div style={{ width: '45%', height: 'auto'}}>
                    {
                        data1.map((d, i) => (<p style={{ color: 'grey'}} key={i}>{d}</p>))
                    }
                </div>
                <div style={{ width: '45%', height: 'auto'}}>
                    {
                        data2.map((d, i) => (<p style={{ color: 'grey'}} key={i}>{d}</p>))
                    }
                </div>
            </div>
        </div>
    );
}