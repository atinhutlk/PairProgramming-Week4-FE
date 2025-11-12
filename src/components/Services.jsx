import { services } from '../data'
import Title from './Title'
import Service from './Service'
import { useState } from 'react'


function Services() {
  const [servicesData, setServicesData] = useState(services);

  const removeServices = (id) => {
    const newServices = servicesData.filter((service) => service.id !== id)
    setServicesData(newServices);
  }

  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {servicesData.map((service) => {
          return <Service {...service} key={service.id} id={service.id} removeServices={removeServices} />
        })}
      </div>
    </section>
  );
}

export default Services