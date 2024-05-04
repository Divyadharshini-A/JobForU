import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import ReactiveButton from "reactive-button"
//import { useNavigate } from 'react-router-dom';
const Details = () => {
    const { id } = useParams();
    const [state, setState] = useState('idle');
    const [job, setJob] = useState({});
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/all-jobs/${id}`)
            .then(res => res.json())
            .then(data => setJob(data));
    }, [id]);

    const handleUpload = () => {
        // You can now upload the selected file using an API or perform other actions
        console.log('Uploading file:', selectedFile);
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleApply = async () => {
        const { value: url } = await Swal.fire({
            input: 'url',
            inputLabel: 'LinkedIn URL',
            inputPlaceholder: 'Enter your URL'
        });
        if (url) {
            Swal.fire(`Entered URL: ${url}`);
        }
    };

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 flex flex-col'>
            <PageHeader title={"Single Job Page"} path={"Single Job"} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
  <div className="flex flex-col justify-center items-center p-4">
    <h2 className="text-xl font-bold mb-4">Job Details: {id}</h2>
    <h1 className="text-3xl font-semibold mb-4 text-blue">Welcome to the Job Application page of <b className="text-blue-500">{job.jobTitle}</b></h1>
    <Link to="/application">
      <ReactiveButton buttonState={state} onClick={() => {setState('loading'); setTimeout(() => {setState('success');}, 2000); }} className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
        Apply Now
      </ReactiveButton>
    </Link>
    {/* Additional form fields or content can be added here */}
  </div>
  {/* If there's additional job description content, add it here with appropriate classes */}
</div>

            
            <hr className="my-8 border-t border-gray-300" />
            <h2 className="text-2xl font-bold mb-1">Job Description</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                    <section id="responsibilities" className="mt-8">
                        <h2 className="text-lg font-semibold mb-4">{job.jobTitle} Job Responsibilities:</h2>
                        <ul className="list-none list-inside">
                            <li className="mb-2 flex items-center">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Take ownership of design projects.
                            </li>
                            <li className="mb-2 flex items-center">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Design page layouts and templates.
                            </li>
                            <li className="mb-2 flex items-center">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Produce design assets for use in social media and marketing channels.
                            </li>
                            <li className="mb-2 flex items-center">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Develop and maintain consistent branding.
                            </li>
                            <li className="mb-2 flex items-center">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Collaborate with UX, marketing, engineering, and other teams.
                            </li>
                            <li className="mb-2 flex items-center">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Utilize data and analytics in making design decisions.
                            </li>
                            <li className="mb-2 flex items-center">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Work with front-end web developers to deploy designs.
                            </li>
                            <li className="mb-2 flex items-center">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Select and prepare imagery.
                            </li>
                            <li className="mb-2 flex items-center">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Create and maintain a database of design assets.
                            </li>
                        </ul>
                    </section>
                </div>
                <div>
                    <section id="qualifications" className="mt-8">
                        <h2 className="text-lg font-semibold mb-4">{job.jobTitle} Qualifications/Skills:</h2>
                        <ul className="list-none">
                            <li className="mb-2 flex items-center">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Proven understanding of graphic design fundamentals
                            </li>
                            <li className="mb-2 flex items-center">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Demonstrated ability to take a project from concept to launch
                            </li>
                            <li className="mb-2 flex items-center">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Strong command of color theory, image composition, and typography
                            </li>
                            <li className="mb-2 flex items-center">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Excellent time-management skills
                            </li>
                            <li className="mb-2 flex items-center">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Ability to deliver production-ready digital assets in a wide variety of formats
                            </li>
                            <li className="mb-2 flex items-center">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Awareness of UI/UX principles
                            </li>
                            <li className="mb-2 flex items-center">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Familiarity with digital photo editing
                            </li>
                            <li className="mb-2 flex items-center">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Working knowledge of Microsoft Office (Word, Excel, PowerPoint)
                            </li>
                            <li className="mb-2 flex items-center">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Comfort working in a deadline-driven environment
                            </li>
                            <li className="mb-2 flex items-center">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Excellent written and verbal communication skills
                            </li>
                            <li className="mb-2 flex items-center">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Attention to detail with a high degree of accuracy
                            </li>
                        </ul>
                    </section>
                </div>
                <div>
                <section id="requirements" className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Education and Experience Requirements:</h2>
            <ul className="list-none">
                <li className="mb-2 flex items-center" >
                  <span  className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Bachelor’s degree in graphic design or a related field</li>
                <li className="mb-2 flex items-center" >
                <span  className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>One to three years of professional design experience</li>
                <li className="mb-2 flex items-center" >
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Portfolio of strong creative work</li>
                <li className="mb-2 flex items-center">
                <span  className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Experience with Adobe Creative Cloud (Dreamweaver, Photoshop, InDesign, Illustrator)</li>
                <li className="mb-2 flex items-center">
                <span  className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Experience with HTML, Javascript, and CSS</li>
                <li className="mb-2 flex items-center">
                <span  className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Social media and email marketing experience a plus</li>
            </ul>
        </section>
                </div>
                
            </div>
          

        </div>
    );
};

export default Details;
