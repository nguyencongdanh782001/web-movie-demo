import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsBookmark } from 'react-icons/bs';
import Header from '../../components/Header';

const DetailProduct = ({ movieDetail }: any) => {
  const [movieCurent, setMovieCurent] = useState([]);
  useEffect(() => {
    const listCurentMovie = JSON.parse(localStorage.getItem('listMoive') as any);
    if (listCurentMovie && listCurentMovie.length > 0) {
      const newListMovie = listCurentMovie.filter(
        (item: any, index: any) => item.mal_id !== movieDetail.data.mal_id
      );
      if (newListMovie.length > 4) {
        const sliceListMovie = newListMovie.slice(0, 4);
        localStorage.setItem('listMoive', JSON.stringify([movieDetail.data, ...sliceListMovie]));
      } else {
        localStorage.setItem('listMoive', JSON.stringify([movieDetail.data, ...newListMovie]));
      }
    } else {
      localStorage.setItem('listMoive', JSON.stringify([movieDetail.data]));
    }
    setMovieCurent(listCurentMovie);
  }, []);

  return (
    <div className='container mx-auto max-w-7xl'>
      <Head>
        <title>{movieDetail?.data?.title}</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <div className='mt-[5px]'>
          <section className='mb-[26px] flex items-center justify-between'>
            <h4 className='text-black font-bold text-5xl capitalize'>{movieDetail?.data?.title}</h4>
            <div>
              <button className='flex items-center bg-gray-custom-1 text-base text-black py-[14px] px-[29px] rounded-[30px] font-medium'>
                <i className='mr-[10px]'>
                  <BsBookmark className='text-xl' />
                </i>
                Add to watchlist
              </button>
            </div>
          </section>
          <section className='flex items-start'>
            <div className='flex items-start'>
              <div className='w-[196px] h-[291px] rounded-[20px] overflow-hidden'>
                <img
                  src={movieDetail?.data?.images?.jpg?.image_url}
                  alt=''
                  className='h-full w-full object-cover rounded-[20px]'
                />
              </div>
              <div className='ml-[20px]'>
                <div className='flex items-center space-x-5'>
                  {movieDetail?.data?.genres.map((item: any, index: number) => (
                    <p
                      key={item.mal_id}
                      className='m-0 capitalize text-base2 text-black font-medium border border-black py-[6px] px-[18px] rounded-[20px]'
                    >
                      {item?.name}
                    </p>
                  ))}
                </div>
                <div className='mt-[19px] max-w-[413px]'>
                  <p className='text-base2 font-medium text-black text leading-[21px]'>
                    {movieDetail?.data?.synopsis.substring(0, 200)}...
                  </p>
                </div>
                <div className='flex items-center mt-[48px]'>
                  <div className='mr-[15px]'>
                    <p className='text-center text-base2 font-normal leading-[21px]'>IMDB Rating</p>
                    <p className='text-center text-base font-normal text-gray-custom-2 m-0 leading-[18px]'>
                      ⭐<span className='text-black '>{movieDetail?.data?.score}</span>/10
                    </p>
                  </div>
                  <p className='text-center text-base2 font-normal text-gray-custom-2 m-0 leading-[18px]'>
                    {movieDetail?.data?.favorites} Likes
                  </p>
                </div>
              </div>
            </div>
            <div className='w-[521px] h-[291px] ml-[129px]'>
              <iframe
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/qig4KOK2R2g?enablejsapi=1&wmode=opaque&autoplay=1'
                allowFullScreen
                className='rounded-[20px]'
              ></iframe>
            </div>
          </section>
          <section className='mt-[55px] flex items-center'>
            <div className='mr-[23px]'>
              <h1 className='text-3xl font-bold text-black'>Episodes</h1>
            </div>
            <div className='flex items-center'>
              {Array(4)
                .fill(0)
                .map((item, index) => (
                  <Link
                    href='#'
                    key={index}
                    className='m-0 font-bold text-xl color-black py-[10px] px-[16px] mr-[7px] rounded-[10px] bg-gray-custom-1 cursor-pointer last:mr-0'
                  >
                    {index + 1}
                  </Link>
                ))}
            </div>
          </section>

          <section className='mt-[35px] mb-[28px] flex items-center'>
            <div className='w-full grid grid-cols-4 gap-5'>
              {movieCurent.length > 0 &&
                movieCurent.map((item: any, index) => (
                  <Link href={`/anime/${item.mal_id}`} key={item.mal_id}>
                    <div className='border rounded-[20px] overflow-hidden'>
                      <div className='h-[142px] w-full rounded-t-[20px]'>
                        <img
                          src={item?.images?.jpg?.image_url}
                          alt=''
                          className='h-full w-full rounded-t-[20px] object-cover'
                        />
                      </div>
                      <div className='py-[19px] px-[17px]'>
                        <h5 className='text-xl font-bold text-black'>{item?.title}</h5>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DetailProduct;

export async function getServerSideProps(context: any) {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${context.query.id}`);
  const movieDetail = await res.json();

  return {
    props: {
      movieDetail,
    },
  };
}
