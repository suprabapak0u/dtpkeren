import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function UserProfileScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="user.profile"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">GreenSoul Digital Harvest Cafe</ThemedText>
      </ThemedView>
      <ThemedText type="subtitle">GreenSoulComp</ThemedText>
      <ThemedText>GreenSoul Café adalah bisnis F&B inovatif yang menggabungkan kafe sehat, kebugaran, dan supermarket sayuran segar dalam satu aplikasi. Melalui aplikasi ini, pelanggan bisa memesan makanan sehat..</ThemedText>

      <Collapsible title="Contact Information">
        <ThemedText>Email: <ThemedText type="defaultSemiBold">greensoulcomp@gmail.com</ThemedText></ThemedText>
        <ThemedText>Phone: <ThemedText type="defaultSemiBold">+62 859-4292-3317</ThemedText></ThemedText>
      </Collapsible>

      <Collapsible title="Social Media">
        <ExternalLink href="bit.ly/GreenSoulCompany">
          <ThemedText type="link">website</ThemedText>
        </ExternalLink>
    
      </Collapsible>

      <Collapsible title="location">
        <ThemedText>
          -Ikn
        </ThemedText>
        <ThemedText>
          -Bali
        </ThemedText>
        <ThemedText>
          -Kalimantan
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 20,
  },
});