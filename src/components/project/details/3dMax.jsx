import React from 'react';
import setImage from './setImage';
import PdfSlider from '../../elements/PdfSlider';

const Detail = () => {
    let pdfImage = [];
    setImage(pdfImage, '/img//max3d/3d-max-', 32);

    return (
        <div className="max3d">
            <div className="section1">
                <h5 className="quot-title"> # 3D MAX - Tangled </h5>
                <p> 소리를 켜주세요! </p>
                <iframe width="840" height="630" src="https://youtube.com/embed/Avc1ugCUjCo?autoplay=1"> </iframe>
            </div>
            <div className="section2">
                <h5 className="quot-title"># 포기없는 도전</h5>
                <PdfSlider images={pdfImage} toShow={6} />
            </div>
        </div>
    )
}

export default Detail;
