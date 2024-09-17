function parseHeading(s)
{
    let res = decodeURIComponent(s);
    res = res.replace(/[-]/g, ' ');
    res = res.replace(/\b\w/g, (char) => char.toUpperCase());
    return res;
}

export default function Page({ params }) {
    return (
        <div>
            <h1 className='font-bold text-center text-5xl'>{parseHeading(params.tour)}</h1>
        </div>
    );
  }