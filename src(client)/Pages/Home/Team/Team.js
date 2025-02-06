import React from 'react';
import teamM1 from '../../../assets/images/team/member1.jpg'
import teamM2 from '../../../assets/images/team/member2.jpg'
import teamM3 from '../../../assets/images/team/member3.jpg'
import TeamCard from './TeamCard';

const Team = () => {
    const teamData = [
        {
            _id: 23401,
            title: "Md Miraj",
            describe: "Engine Expart",
            image: teamM1
        },
        {
            _id: 23402,
            title: "Muaaz Uddin",
            describe: "Engine Expart",
            image: teamM2
        },
        {
            _id: 23403,
            title: "Musfik",
            describe: "Engine Expart",
            image: teamM3
        }
    ]
    return (
        <div className='pb-20 pt-5 bg-gradient-to-r from-violet-100 from-15%  to-emerald-100 to-90%'>
            <div className=' max-w-screen-xl mx-auto'>
                <div className='text-center justify-items-center'>
                    <p className="text-2xl text-red-500 font-bold">Team</p>
                    <h1 className='text-5xl font-bold my-6'>Triple M</h1>
                    <p className='text-center capitalize mt-7 text-gray-500 text-base leading-7'>the majority have suffered alteration in some form, by injected humour, or randomised</p>
                    <p className='text-center capitalize mb-7 text-gray-500 text-base leading-7'>words which don't look even slightly believable. </p>
                </div>
                <div className='mt-14 gap-y-10 gap-x-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        teamData.map(teamMember => <TeamCard
                            key={teamMember._id}
                            teamMember={teamMember}
                        ></TeamCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Team;