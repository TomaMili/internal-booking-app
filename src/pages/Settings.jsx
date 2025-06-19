import SettingsForm from "../features/settings/SettingsForm";

function Settings() {
  return (
    <div className="flex-1 h-full ">
      <h1 className="font-bold text-4xl">Update hotel settings</h1>
      <SettingsForm />
    </div>
  );
}

export default Settings;
