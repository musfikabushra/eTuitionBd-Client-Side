import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { User, Image as ImageIcon, Camera, Mail } from "lucide-react";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";

const EditProfile = () => {
    const { user, updateUserProfile, setUser } = useAuth();

    const { register, handleSubmit, watch, formState: { isSubmitting }, } = useForm({
        defaultValues: {
            name: user?.displayName || user?.providerData?.[0]?.displayName || "",
            photo: user?.photoURL || user?.providerData?.[0]?.photoURL || "",
        },
    });

    const nameValue = watch("name");
    const photoValue = watch("photo");

    const onSubmit = async (data) => {
        try {
            await updateUserProfile({
                displayName: data.name,
                photoURL: data.photo,
            });
            setUser({ ...user, displayName: data.name, photoURL: data.photo });
            toast.success("Profile updated successfully!");
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-50 to-white py-12 px-4">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-lg bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100"
            >
                {/* Profile Header */}
                <div className="flex flex-col items-center mb-10 text-center">
                    <h2 className="text-3xl font-black text-slate-800 mb-8">Edit Profile</h2>
                    
                    <div className="relative group">
                        <div className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
                        <img 
                            src={photoValue || "https://i.ibb.co.com/mR70vBR/user.png"} 
                            alt="Profile"
                            className="relative w-32 h-32 rounded-3xl object-cover border-4 border-white shadow-2xl transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => { e.target.src = "https://i.ibb.co.com/mR70vBR/user.png"; }}
                        />
                        <div className="absolute -bottom-2 -right-2 bg-indigo-600 p-2.5 rounded-2xl text-white shadow-lg border-4 border-white">
                            <Camera size={18} />
                        </div>
                    </div>

                    <div className="mt-5">
                        <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                            {nameValue || "Your Name"}
                        </h3>
                        <div className="flex items-center justify-center gap-2 text-slate-500 mt-1 font-medium">
                            <Mail size={14} className="text-indigo-400" />
                            <span className="text-sm">{user?.email || user?.providerData?.[0]?.email}</span>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-5">
                        {/* Name Input */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
                                <input 
                                    {...register("name", { required: "Name is required" })} 
                                    type="text" 
                                    className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-semibold text-slate-700" 
                                    placeholder="Ex: John Doe" 
                                />
                            </div>
                        </div>

                        {/* Photo URL Input */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Avatar Link (URL)</label>
                            <div className="relative group">
                                <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
                                <input 
                                    {...register("photo", { required: "Photo URL is required" })} 
                                    type="url" 
                                    className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-semibold text-slate-700" 
                                    placeholder="https://image-link.com" 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="w-full hover:scale-105 bg-gradient-to-r from-primary via-indigo-500 to-primary text-white rounded-2xl font-bold py-4.5 shadow-xl shadow-indigo-100 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 uppercase text-sm tracking-widest h-[56px]"
                    >
                        {isSubmitting ? (
                            <span className="loading loading-spinner loading-md"></span>
                        ) : (
                            "Update Profile"
                        )}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default EditProfile;