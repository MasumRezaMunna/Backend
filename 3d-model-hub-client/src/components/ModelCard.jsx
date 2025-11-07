import React from 'react';
import { Link } from 'react-router-dom';

const ModelCard = ({ model }) => (
  <div className="card card-compact bg-base-100 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
    <figure className="h-60 overflow-hidden">
      <img src={model.thumbnailUrl} alt={model.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
    </figure>
    <div className="card-body">
      <div className="flex justify-between items-center">
        <h2 className="card-title text-lg font-bold">{model.name}</h2>
        <div className="badge badge-primary badge-outline">{model.category}</div>
      </div>
      <p className="text-sm text-base-content/70 mt-1">By: {model.created_by}</p>
      <div className="card-actions justify-end mt-4">
        <Link to={`/models/${model._id}`} className="btn btn-primary btn-sm">
          View Details
        </Link>
      </div>
    </div>
  </div>
);

export default ModelCard;