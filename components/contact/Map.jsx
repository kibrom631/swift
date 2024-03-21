const Map = () => {
  return (
    <div className="map-area-one p-30 mt-120 lg-mt-80 wow fadeInUp">
      <div className="box-layout">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              src="https://www.google.com/maps?width=600&height=400&hl=en&q=1230%20S%20Parker%20Rd%2C%20Denver%2C%20CO%2080231%2C%20USA&t=&z=12&ie=UTF8&iwloc=B&output=embed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
