const Skills = () => {
    const skillCategories = [
      {
        title: 'Data Engineering',
        skills: ['ETL Pipelines', 'Data Warehousing', 'Data Modeling', 'Apache Airflow'],
      },
      {
        title: 'Programming',
        skills: ['Python', 'SQL', 'JavaScript', 'React'],
      },
      // Add more categories...
    ];
  
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Skills & Technologies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Skills;
  