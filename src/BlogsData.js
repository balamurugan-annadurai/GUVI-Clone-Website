import fs1 from "./assets/full-stack/fs-1.jpg";
import fs2 from "./assets/full-stack/fs-2.jpg";
import fs3 from "./assets/full-stack/fs-3.jpg"

import ds1 from "./assets/data-science/ds1.webp";
import ds2 from "./assets/data-science/ds2.webp";
import ds3 from "./assets/data-science/ds3.jpg";

import cs1 from './assets/cyber/cs1.webp';
import cs2 from './assets/cyber/cs2.webp';
import cs3 from './assets/cyber/cs3.webp';


import c1 from './assets/career/c1.webp';
import c2 from './assets/career/c2.webp';
import c3 from './assets/career/c3.webp';

const blogs = [
    {
        title: 'Best Full-Stack Development Project Ideas in 2024',
        img: fs1,
        domain: 'Full stack Development',
        url: 'https://www.guvi.in/blog/full-stack-development-project-ideas/',
        content: `When you give your resume to any potential recruiter, the first thing that they check apart from your education is the number of projects that you have done during your career. The aim of the project is not just to showcase your understanding of the subject but rather to showcase your interest in that subject that extends beyond academics
        Building a project is very important for individuals to gain practical knowledge of concepts. Since full-stack development is the most demanding job in the IT industry, hence, it’s very important for you to build some creative and amazing projects. The demand for full-stack developers is rising and will continue to rise in the coming years.`
    },
    {
        title: '6 Essential Prerequisites For Learning ReactJS',
        img: fs2,
        domain: 'Full stack Development',
        url: 'https://www.guvi.in/blog/prerequisites-for-reactjs/',
        content: `Have you ever wished to create your own modern website or app with high performance and security?
        If you did, learning ReactJS is the best decision! Making beautiful, sensitive, and quick web applications requires a lot of effort. ReactJS has a lot to offer in UI development.
        Now, the very first thought that might as well come to your mind is- What are the prerequisites for ReactJS?
        Well, ReactJS is a very powerful front-end framework based on JavaScript.`
    },
    {
        title: '30 Best JavaScript Project Ideas For You [3 Bonus Portfolio Projects]',
        img: fs3,
        domain: 'Full stack Development',
        url: 'https://www.guvi.in/blog/best-javascript-project-ideas/',
        content: `Does the aspect of building interactive web applications interest you? If yes, then you must start learning JavaScript. Once you learn the basics of the language, you need to keep practicing by building JavaScript projects.
        For those starting out, JavaScript is an object-oriented programming language that enables its developers to take complete control of the web elements and build dynamic, graphic, and interactive components with ease.
        If you are a newbie in the world of JavaScript programming or need to test your JS skills with some great projects, we have got you all covered.
        This article will give you some of the best JavaScript Mini Project Ideas for beginners and awesome project ideas with source codes for intermediate and advanced JavaScript developers to build their portfolios.`
    },
    {
        title: 'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
        img: ds1,
        domain: 'Data science',
        url: 'https://www.guvi.in/blog/top-non-coding-jobs-in-data-science/',
        content: `Are you someone who’s not interested in coding, but wants to get placed in tech through data science, and earn a handsome salary? Worry Not! Tech companies have various opportunities open for you even if you’ve no experience in coding. Data science has evolved to become one of the most sought-after fields in the tech industry.
        While coding remains an integral part of data science, it’s not the only path to a successful career in this dynamic field. In 2024, tech companies and startups are expanding their teams to include professionals who excel in non-coding jobs in data science.
        In this blog, we’ll explore the top 10 non-coding jobs in data science that are in high demand this year. These no-code roles in data science offer huge salaries, remote working opportunities, and promising career growth.`
    },
    {
        title: 'Roles and Responsibilities of a Data Scientist',
        img: ds2,
        domain: 'Data science',
        url: 'https://www.guvi.in/blog/roles-and-responsibilities-of-a-data-scientist/',
        content: `Data science is a rapidly growing field that has become essential for businesses to thrive in the digital age. As organizations wrestle with large volumes of data, the need for skilled professionals who can extract valuable insights has skyrocketed.
        This is where data scientists come into play. In this comprehensive guide, we will explore the job description, roles, and responsibilities of a data scientist, as well as the skills required to excel in this field.
        So, if you are considering a career as a data scientist or want to learn more about this exciting profession, read on!`
    },
    {
        title: 'How to become a Data Scientist after Mechanical Engineering?',
        img: ds3,
        domain: 'Data science',
        url: 'https://www.guvi.in/blog/how-to-become-data-scientist-after-mechanical-engineering/',
        content: `Switching careers can sound quite intimidating especially when you’re a mechanical engineer by educational qualification, & willing to break into the Data Science industry as a Data Scientist. While dreaming of a data science career is a sign of forward thinking. Do you know how? According to ‘The Humans of Data Science’ report published by Michael Page India(a global recruitment firm), the demand for data science professionals is expected to increase globally by 11.5 million by 2026. Indeed, Data Science is a smart choice for making a promising career. 
        But, how do you get started in data science with mechanical engineering background? Before we jump into that, It’s also essential to know how data science is advantageous for mechanical engineers.`
    },
    {
        title: 'Cybersecurity Vs Ethical Hacking: Top 10 Differences',
        img: cs1,
        domain: 'Cyber security',
        url: 'https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/',
        content: `Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data and privacy concerns are all kept safe.
        Is there a difference between cybersecurity and ethical hacking, if yes what is the difference? Let’s find out!
        First off, we will understand what Cybersecurity is and how it is related to your online activities. We will consider numerous points and have an in-depth comparison, to find out the difference between Cybersecurity and Ethical Hacking. 
        Whether you are a business owner or an individual who uses the internet regularly you must understand these terms so that you can take the necessary precautions to protect yourself and your data. In this article, we’re going to shed light on these two security niches. 
        To further understand the difference between cyber security and ethical hacking and which one’s better for you, we will also look at what role you can expect to play as an ethical hacker or cyber security professional. Let’s Dig in!`
    },
    {
        title: 'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
        img: cs2,
        domain: 'Cyber security',
        url: 'https://www.guvi.in/blog/top-non-coding-jobs-in-cybersecurity/',
        content: `In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills are a prerequisite for success.
        While it is true that certain cybersecurity roles require extensive coding knowledge, there are plenty of non-coding jobs within the industry that play a crucial role in protecting organizations from cyber threats.
        In this comprehensive guide, we will explore the various non-coding jobs in cybersecurity, the skills required for each role, and how to pursue a career in this exciting field.`
    },
    {
        title: 'What Is Hacking? Types of Hacking & More',
        img: cs3,
        domain: 'Cyber security',
        url: 'https://www.guvi.in/blog/what-is-hacking/',
        content: `Have you ever wondered what hacking is all about? It’s a big deal in today’s tech-heavy world, and it can be both fascinating and scary. In this blog, we’re going to explore hacking in simple terms so that you can understand it better. We’ll look at the different kinds of hacking that exist. 
        For example, there are hackers who try to steal your passwords and others who fight to protect your information. Some hackers even have strong beliefs and use their skills to support their causes. It’s a bit like a digital battlefield out there.
        By the end of this blog, you’ll have a better understanding of what hacking is all about, why it matters, and how you can protect yourself in the digital world. So, let’s begin this journey to unravel the mysteries of hacking in a simple and understandable way.`
    },
    {
        title: 'Career in Animation: Jobs, Salary, Future Scope in India (2024)',
        img: c1,
        domain: 'Career',
        url: 'https://www.guvi.in/blog/guide-for-career-in-animation/',
        content: `The animation industry is on the brink of an unprecedented boom, with the global market size poised to reach $400 billion by the end of this year. This growth is driven by a robust Compound Annual Growth Rate (CAGR) of 5.2% between 2023 and 2030, largely fueled by the expanding realms of media and entertainment. 
        Such promising figures underscore the viability and thriving of a career in animation, which offers vast opportunities for creativity and innovation.
        This blog aims to be your definitive guide to navigating the vibrant world of animation. Whether you’re exploring the various job roles within the industry, curious about potential earnings, or interested in the evolving future scope of animation in India, you’ll find comprehensive insights right here. 
        Let’s figure out what makes a career in animation a tempting choice and discover the roles, rewards, and future trends shaping the industry.`
    },
    {
        title: '8 Mistakes To Avoid When You Begin a Data Science Career',
        img: c2,
        domain: 'Career',
        url: 'https://www.guvi.in/blog/mistakes-to-avoid-in-a-data-science-career/',
        content:`With leading modern-day companies relying on Data Science professionals to make more informed decisions and bring in better solutions, the field of data science is constantly evolving. We agree that the demand for data scientists is steadily increasing. On the other hand, data science is hands down one of the competitive fields where you need to be a skillful professional with appropriate expertise to sustain your stand in the field.
        If you’re a data science aspirant, practice to stay flawless from the beginning of your career. This blog highlights the beginner mistakes you should avoid when you start a Data Science career. Let’s dive in! `
    },
    {
        title: 'Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career',
        img: c3,
        domain: 'Career',
        url: 'https://www.guvi.in/blog/top-technologies-to-learn-now/',
        content:`If your New Year resolution consists of building a successful tech career in 2024, then you need a few more weapons in your arsenal to achieve your goal. The tech industry is rapidly evolving and as a representative of the techie world, we can feel how daunting it must feel to keep up!
        But hey, that’s the beauty of tech. There’s always something new and better to discover. The past decade has been synonymous with exponential growth in technical innovation with close to 2.4 million job openings in 2023 alone. Undoubtedly, data science, machine learning, artificial intelligence, cybersecurity, cloud, and blockchain are some of the top technologies that people learn to transition into a high-paying tech role.`
    }

]

export default blogs;