import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AddressView() {
    return (
        <div className="bg-background rounded px-3 py-2 d-flex gap-2 align-items-center">
            <FontAwesomeIcon
                icon={["fas", "map-marker-alt"]}
                className="text-muted"
                size="lg"
            />
            <div className="text-truncate" style={{ maxHeight: 44 }}>
                <p className=" mb-0 small text-wrap">
                    Số 57 Triều Khúc,Thanh Xuân,Hà Nội
                </p>
            </div>
            <button className="btn btn-sm px-1 ms-auto">
                <FontAwesomeIcon
                    icon={["fas", "ellipsis-v"]}
                    className="text-muted"
                />
            </button>
        </div>
    );
}

export default AddressView;
