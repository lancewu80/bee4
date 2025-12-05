import React from 'react'
import CommonHead from '../common/CommonHead'
import SingleReview from '../common/SingleReview'
import Slider from 'react-slick';
import pfp1 from '../../assets/pfp1.png'
import pfp2 from '../../assets/pfp2.png'
import pfp3 from '../../assets/pfp3.png'
import pfp4 from '../../assets/pfp4.png'

const Review = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const ReviewData = [
    {
      message: 'Tellus augue commodo id quis tempus etiam sed. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Mattis pellentesque vitae mattis aliquet velit arcu risus.',
      image: pfp1,
      username: 'Fannie Summers',
      role: 'Designer'
    },
    {
      message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      image: pfp2,
      username: 'Annette Black',
      role: 'Manager'
    },
    {
      message: 'Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.',
      image: pfp3,
      username: 'Fannie Summers',
      role: 'Designer'
    },
    {
      message: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas..',
      image: pfp4,
      username: 'Robert Fox',
      role: 'PR-Director'
    }
  ]
  return (
    <>
      <main id='Review' className='mt-[60px] sm:mt-[80px] md:mt-[100px]'>
        <div className="container px-4 md:px-6">
          <div id="Review-Row">
            <CommonHead head={'People Love Living with Homes'} text={'Aliquam lacinia diam quis lacus euismod'} />

            {/* ----------------- Review Sliders -------------------- */}
            <div className='mt-[30px] sm:mt-[45px] md:mt-[60px]'>
              <Slider {...settings}>
                {
                  ReviewData.map((item, i) => (
                    <div key={i} className="px-2 sm:px-3 md:px-4">
                      <SingleReview image={item.image} message={item.message} username={item.username} role={item.role} />
                    </div>
                  ))
                }
              </Slider>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Review