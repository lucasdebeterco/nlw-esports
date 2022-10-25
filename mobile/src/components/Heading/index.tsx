import { View, Text, ViewProps } from 'react-native';
import { styles } from './style';

interface Props extends ViewProps {
    title: string,
    subtitle: string
}

export function Heading({ title, subtitle, ...rest }: Props) {
    return (
        <View style={styles.containter} {...rest}>
            <Text style={styles.title}>
                {title}
            </Text>

            <Text style={styles.subtitle}>
                {subtitle}
            </Text>
        </View>
    )
}