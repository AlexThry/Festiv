import { NativeTabs } from "expo-router/unstable-native-tabs";
import { SettingsSheetProvider } from "../../src/context/SettingsSheetContext";
import SettingsSheet from "../../src/components/SettingsSheet";

export default function TabsLayout() {
  return (
    <SettingsSheetProvider>
      <NativeTabs>
        <NativeTabs.Trigger name="dashboard">
          <NativeTabs.Trigger.Label>Mes Festivals</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="calendar" md="event" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="lineups">
          <NativeTabs.Trigger.Label>Lineup</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="bolt.fill" md="bolt" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="suivi">
          <NativeTabs.Trigger.Label>Live</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="location.fill" md="my_location" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="amis">
          <NativeTabs.Trigger.Label>Amis</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="person.badge.plus" md="person_add" />
        </NativeTabs.Trigger>
      </NativeTabs>
      <SettingsSheet />
    </SettingsSheetProvider>
  );
}
