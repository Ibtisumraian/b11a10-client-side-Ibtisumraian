import React, { useContext, useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../firebase/firebase.init';

const UserProfile = () => {
  const { user, theme } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [updating, setUpdating] = useState(false);
  const [message, setMessage] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);
    setMessage('');

    try {
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });
      setMessage('✅ Profile updated successfully!');
      setEditMode(false);
    } catch (error) {
      setMessage(`❌ Update failed: ${error.message}`);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className={`w-full px-4 py-8 sm:px-8 sm:py-12 ${theme === 'dark' ? 'bg-[#0f1b28] text-white' : 'bg-[#F6F4F1] min-h-screen text-gray-800'}`}>
      <div className={`max-w-3xl mx-auto p-6 sm:p-10 rounded-2xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-3xl font-semibold text-center mb-8 fontRokkitt">
          Profile Settings
        </h2>

        <div className="flex flex-col items-center gap-4 mb-8">
          <img
            src={user?.photoURL || 'https://i.ibb.co/4pDNDk1/avatar.png'}
            alt="User Avatar"
            className="w-28 h-28 rounded-full object-cover border-4 border-[#56c9c1]"
          />
          <p className="text-xl font-semibold">{user?.displayName || 'No Name'}</p>
          <p className="text-sm text-gray-400 dark:text-gray-300">{user?.email}</p>
        </div>

        {editMode ? (
          <form onSubmit={handleUpdate} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Display Name</label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Photo URL</label>
              <input
                type="url"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="flex flex-col gap-4">
              <button
                type="submit"
                className="btn bg-[#56c9c1] hover:bg-[#45b1a9] text-white w-full"
                disabled={updating}
              >
                {updating ? 'Updating...' : 'Save Changes'}
              </button>
              <button
                type="button"
                className="btn bg-gray-500 hover:bg-gray-600 text-white w-full"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <button
              className="btn bg-[#005A52] hover:bg-[#003e39] text-white px-8 py-2"
              onClick={() => setEditMode(true)}
            >
              Edit Profile
            </button>
          </div>
        )}

        {message && (
          <p className="text-center mt-6 text-sm font-medium">
            <span className={message.includes('✅') ? 'text-green-500' : 'text-red-500'}>
              {message}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
