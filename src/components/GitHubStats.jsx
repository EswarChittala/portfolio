import React from 'react';

const GitHubStats = () => {
  return (
    <section id="github" className="section bg-section">
      <div className="container max-w-4xl">
        <div className="section-heading">
          <h2>GitHub Stats</h2>
          <p>My open-source contributions and coding activity.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-4 flex justify-center items-center">
            <img
              src="https://github-readme-stats.vercel.app/api?username=EswarChittala&show_icons=true&theme=transparent&hide_border=true&title_color=3b82f6&text_color=94a3b8&icon_color=3b82f6"
              alt="Eswar's GitHub Stats"
              className="w-full max-w-md h-auto"
            />
          </div>
          <div className="card p-4 flex justify-center items-center">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=EswarChittala&theme=transparent&hide_border=true&title_color=3b82f6&text_color=94a3b8&icon_color=3b82f6"
              alt="Eswar's GitHub Streak"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
