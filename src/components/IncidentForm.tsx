// src/components/IncidentForm.tsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Incident, Severity } from '../types/incident';

interface IncidentFormProps {
  onSubmit: (data: Omit<Incident, "id" | "reported_at">) => void;
}

type FormData = {
  title: string;
  description: string;
  severity: Severity;
};

export function IncidentForm({ onSubmit }: IncidentFormProps) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  
  const onFormSubmit = (data: FormData) => {
    onSubmit(data);
    reset();
    setIsFormVisible(false);
  };
  
  return (
    <div className="mb-8 bg-white rounded-lg border shadow-sm hover:shadow-md transition-all ">
    {!isFormVisible ? (
      <button
        onClick={() => setIsFormVisible(true)}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md flex items-center justify-center gap-2 transition-colors"
      >
        Report New Incident
      </button>
    ) : (
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
          <h2 className="text-xl font-bold">Report New AI Safety Incident</h2>
          
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              {...register("title", { required: "Title is required" })}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Brief title describing the incident"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              {...register("description", { required: "Description is required" })}
              className="w-full px-3 py-2 border rounded-md h-24"
              placeholder="Detailed description of what happened..."
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Severity</label>
            <select
              {...register("severity", { required: "Severity is required" })}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            {errors.severity && (
              <p className="mt-1 text-sm text-red-600">{errors.severity.message}</p>
            )}
          </div>
          
          <div className="flex gap-3">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md"
            >
              Submit Report
            </button>
            <button
              type="button"
              onClick={() => {
                reset();
                setIsFormVisible(false);
              }}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
