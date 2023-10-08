import React, { useState, useEffect } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommits, fetchLanguages } from "../redux/features/github/githubActions";
import {Chart as ChartJS} from 'chart.js/auto';

const Widget = ({ title, type, owner, repo }) => {
    console.log(owner, repo);
  let label = "label";
  if(type == 'commits'){
    label = 'Commit Frequency'
  }
  else if(type == 'langs'){
    label = "Languages Used"
  }
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: label,
        data: [],
      },
    ],
  });

  const github = useSelector((state) => state.github);
  const dispatch = useDispatch();

  if (type == 'commits') {
      useEffect(() => {
        if(!github.commits.length)
            dispatch(fetchCommits({owner: owner, repo: repo}))
            console.log(github.commits)
            const commitDates = github.commits.map((commit) => {
              const commitDate = new Date(commit.commit.author.date);
              return commitDate.toDateString();
            });
    
            const commitsPerDate = commitDates.reduce((acc, date) => {
              acc[date] = (acc[date] || 0) + 1;
              return acc;
            }, {});
    
            const labels = Object.keys(commitsPerDate);
            const commitCounts = Object.values(commitsPerDate);
    
            setData((prevData) => ({
              ...prevData,
              labels,
              datasets: [
                {
                  ...prevData.datasets[0],
                  data: commitCounts,
                },
              ],
            }));
        
        
    
      }, [dispatch, github.commits]);
  }
  else if(type == 'langs'){
    useEffect(()=>{
        if(!github.languages.length)
            dispatch(fetchLanguages({owner: owner, repo: repo}));

            console.log(github.languages);
            const labels = Object.keys(github.languages);
            const data = Object.values(github.languages);

            const total = data.reduce((acc, value) => acc + value, 0);
            const percentages = data.map((value) => ((value / total) * 100).toFixed(2));

            setData((prevData) => ({
                ...prevData,
                labels,
                datasets: [
                  {
                    ...prevData.datasets[0],
                    data: percentages,
                    backgroundColor: ['red','blue','green','yellow','orange','purple']
                  },
                ],
              }));
        
    },[dispatch, github.languages.length])
  }

  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-white">
      <div>
        <span className="text-lg font-bold">{title}</span>
      </div>
      <div className="h-full w-full p-0.5">
        {type == 'commits' &&
        <Bar data={data} options={{ responsive: true, maintainAspectRatio: false, backgroundColor: ['red','green'] }} />}
        {type == 'langs' && <Doughnut data={data} options={{ responsive: true, maintainAspectRatio: false }} />}
      </div>
    </div>
  );
};

export default Widget;