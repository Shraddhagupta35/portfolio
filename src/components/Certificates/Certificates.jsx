import { useState } from 'react';
import { certificates } from '../../constants';

const Certificates = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const handleOpenModal = (certificate) => {
        setSelectedCertificate(certificate);
    };

    const handleCloseModal = () => {
        setSelectedCertificate(null);
    };

    return (
        <section
            id='certifica'
            className='pt-24 pb-40 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3'

        >
            {/* Section Title */}
            <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-white'>CERTIFICATES</h2>
                <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
                <p className='text-gray-400 mt-4 text-lg font-semibold'>
                    A showcase of certificates demonstrating my skills and experience in diverse technologies
                </p>
            </div>

            {/* Certificates Grid */}
            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {(certificates || []).map((certificate) => (
                    <div
                        key={`${certificate.title}-${certificate.id}`}
                        onClick={() => handleOpenModal(certificate)}
                        className='border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300'
                    >
                        <div className='p-4'>
                            <img
                                src={certificate.image}
                                alt={certificate.title}
                                className='w-full h-48 object-cover rounded-xl'
                            />
                        </div>
                        <div className='p-6'>
                            <h3 className='text-2xl font-bold text-white mb-2'>{certificate.title}</h3>
                            <p className='text-gray-500 mb-4 pt-5 line-clamp-3'>{certificate.description}</p>
                            <div className='mb-4'>
                                {(certificate.tags || []).map((tag, index) => (
                                    <span
                                        key={index}
                                        className='inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-3 py-1 mr-2 mb-2'
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Model Container */}

            {selectedCertificate && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4'>
                    <div className='bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative'>
                        <div className='flex justify-end p-4'>
                            <button
                                onClick={handleCloseModal}
                                className='text-white text-3xl font-bold hover:text-purple-500'
                            >
                                &times;
                            </button>
                        </div>
                        <div className='flex flex-col'>
                            <div className='w-full flex justify-center bg-gray-900 px-4'>
                                <img src={selectedCertificate.image} alt={selectedCertificate.title} className='lg:w-full w-[95%] object-contain rounded-xl shadow-2xl' />
                            </div>
                            <div className='lh:p-8 p-6'><h3 className='lg:text-3xl font-bold text-white mb-4 text-md'>{selectedCertificate.title}</h3>
                                <p className='text-gray-400 mb-6 lg:text-base text-xs'>{selectedCertificate.description}</p></div>

                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certificates;
