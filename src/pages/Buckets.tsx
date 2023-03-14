import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Props = {};
type beat = {};
type Bucket = {
  createdAt: Date;
  updatedAt: Date;
  id: string;
  title: string;
  color: string;
  description: string | null;
  taskNumber: number;
  fileName: string;
  fileUrl: string;
  fileSize: number;
};

const Buckets: FC = (props: Props) => {
  const [buckets, setBuckets] = useState<Bucket[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const userAccessToken: string = "2f467613cc60466aaaea70165c5a30f5";

  const allBuckets = () => {
    fetch("https://localhost:3000/api/Buckets", {
      method: "GET",
      headers: {
        Authentication: "Bear token--xx-ss",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((data: Bucket[]) => {
        setBuckets(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setLoading(false);
        setError(err.message);
      });
  };

  useEffect(() => {
    if (loading) {
      allBuckets();
    }
  }, [loading]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h1>All Buckets</h1>
          <div>
            <button type="submit">Create Bucket Model</button>
          </div>
        </div>

        {buckets &&
          buckets.map((bucket) => (
            <div className="col-md-3" key={bucket.id}>
              {" "}
              <p>{bucket.title}</p>
            </div>
          ))}

        <div className="col-md-12">
          <Link to="/users">My Users</Link>
        </div>
      </div>
    </>
  );
};
export default Buckets;
