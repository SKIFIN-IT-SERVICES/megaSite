import React from 'react';
import styles from './TechStack.module.css';

const technologies = [
    { name: "React", url: "https://react.dev/" },
    { name: "Python", url: "https://www.python.org/" },
    { name: "TensorFlow", url: "https://www.tensorflow.org/" },
    { name: "PyTorch", url: "https://pytorch.org/" },
    { name: "LangChain", url: "https://www.langchain.com/" },
    { name: "Azure AI", url: "https://azure.microsoft.com/en-us/solutions/ai" },
    { name: "OpenAI", url: "https://openai.com/" },
    { name: "Node.js", url: "https://nodejs.org/" }
];

const TechStack = () => {
    return (
        <section className={styles.stackSection}>
            <div className="container">
                <p className={styles.label}>Powered by best-in-class open technologies</p>
                <div className={styles.list}>
                    {technologies.map((tech, index) => (
                        <a
                            key={index}
                            href={tech.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.techItem}
                            title={`Visit ${tech.name} Documentation`}
                        >
                            <span className={styles.dot}>•</span>
                            {tech.name}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
