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
    <div className=" bg-white dark:bg-gray-800 rounded-xl  shadow-sm">
      {!isFormVisible ? (
        <button
          onClick={() => setIsFormVisible(true)}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow"
        >
          Report New Incident
        </button>
      ) : (
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-5 p-5">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Report New AI Safety Incident</h2>
          
          <div>
            <label className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Title</label>
            <input
              {...register("title", { required: "Title is required" })}
              className="w-full px-4 py-2.5 border rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              placeholder="Brief title describing the incident"
            />
            {errors.title && (
              <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.title.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Description</label>
            <textarea
              {...register("description", { required: "Description is required" })}
              className="w-full px-4 py-2.5 border rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 h-28"
              placeholder="Detailed description of what happened..."
            />
            {errors.description && (
              <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.description.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Severity</label>
            <select
              {...register("severity", { required: "Severity is required" })}
              className="w-full px-4 py-2.5 border rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            >
              <option value="Low"> Low</option>
              <option value="Medium"> Medium</option>
              <option value="High"> High</option>
            </select>
            {errors.severity && (
              <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.severity.message}</p>
            )}
          </div>
          
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow"
            >
              Submit Report
            </button>
            <button
              type="button"
              onClick={() => {
                reset();
                setIsFormVisible(false);
              }}
              className="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
