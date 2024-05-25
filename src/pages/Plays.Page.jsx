import React from 'react'
import DefaultPageHoc from '../layout/Default.layout';

import Poster from '../components/Poster/Poster.Component';
import PlayFilter from '../components/PlayFilter/PlayFilter.Component';

const PlaysPage = () => {
  return (
    <>
      <div className='container mx-auto px-4 my-10'>
        <div className='w-full lg:flex lg:flex-row-reverse gap-4'>
          <div className='lg:w-3/4 p-4 bg-white rounded'>
            <h2 className='text-2xl font-bold mb-4'>Plays in NCR Delhi </h2>
            <div className='flex flex-wrap'>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                <Poster src='https://resizing.flixster.com/8vh7IO1b1ObVGpYXEYo0XJWqYPc=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v9_ah.jpg' title='Attack On Titan' subtitle='' isPlay={true}/>
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                <Poster src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/255a7c63-b405-4edd-94ff-c44941c30bfe/df4kapf-a35c37bb-85d3-476a-9e0d-cbe63862e951.png/v1/fit/w_828,h_1172,q_70,strp/naruto_shippuden_poster_by_zorodash_df4kapf-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMSIsInBhdGgiOiJcL2ZcLzI1NWE3YzYzLWI0MDUtNGVkZC05NGZmLWM0NDk0MWMzMGJmZVwvZGY0a2FwZi1hMzVjMzdiYi04NWQzLTQ3NmEtOWUwZC1jYmU2Mzg2MmU5NTEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.w2Z_TVkccYzZ5LSr8hlc0LJ-YQgN5eotckIQhUcqtjo' title='Naruto' subtitle='' isPlay={true}/>
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                <Poster src='https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-purane-chawal-0-2024-4-9-t-12-10-54.jpg' title='Rajma Chawal' subtitle='' isPlay={true}/>
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                <Poster src='https://avatars.githubusercontent.com/u/87843911?v=4' title='Kunal Chauhan' subtitle='' isPlay={true}/>
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                <Poster src='https://wallpapercave.com/wp/wp10727392.jpg' title='Dragon Ball' subtitle='' isPlay={true}/>
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                <Poster src='https://w0.peakpx.com/wallpaper/236/853/HD-wallpaper-tokyo-ghoul-kaneki-tokyo-ghoul.jpg' title='Tokyo Ghoul' subtitle='' isPlay={true}/>
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                <Poster src='https://image.tmdb.org/t/p/original/keDKycCcn3VgYvZhLnGiyYYtb2H.jpg' title='Violet Evergarden' subtitle='' isPlay={true}/>
              </div>
            </div>
          </div>
          <div className='lg:w-1/4 p-4 bg-white rounded'>
            <h2 className='text-2xl font-bold'>Filters</h2>
            <div>
              <PlayFilter title='Date' tags={["Today","Tomorrow","This Weekend"]}/>
            </div>
            <div>
              <PlayFilter title='Language' tags={["English","Hindi","Tamil"]}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default DefaultPageHoc (PlaysPage);
