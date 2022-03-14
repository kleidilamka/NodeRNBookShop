import React, { useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import styles from "./styles";
import { ThemeContext } from "../../contexts/themeContext";

interface CategoryFilterProps {
  categoryFilter: (ctg: string) => void;
  categories: any;
  setActive: (
    value: React.SetStateAction<number | boolean | undefined>
  ) => void;
  active: boolean | number | undefined;
}

const CategoryFilter = (props: CategoryFilterProps) => {
  const { dark, theme } = useContext(ThemeContext);

  return (
    <ScrollView
      bounces={true}
      horizontal={true}
      style={{ backgroundColor: theme.backgroundColor }}
    >
      {/* All Books Component */}
      <TouchableOpacity
        key={1}
        onPress={() => {
          props.categoryFilter("all"), props.setActive(-1);
        }}
      >
        {props.active === -1 ? (
          <View>
            <Text style={[styles.center, { color: theme.color }]}>All</Text>
            <View style={[styles.pointer, { backgroundColor: theme.color }]} />
          </View>
        ) : (
          <Text
            style={[
              styles.center,
              props.active === -1
                ? styles.active
                : !dark
                ? styles.inactive
                : styles.inactiveDark,
            ]}
          >
            All
          </Text>
        )}
        {/* List */}
      </TouchableOpacity>
      {props.categories.map((item: { _id: string; name: string }) => (
        <TouchableOpacity
          key={item._id}
          onPress={() => {
            props.categoryFilter(item._id);
            props.setActive(props.categories.indexOf(item));
          }}
        >
          {props.active === props.categories.indexOf(item) ? (
            <View>
              <Text style={[styles.center, { color: theme.color }]}>
                {item.name}
              </Text>
              <View
                style={[styles.pointer, { backgroundColor: theme.color }]}
              />
            </View>
          ) : (
            <Text
              style={[
                styles.center,
                props.active === props.categories.indexOf(item)
                  ? styles.active
                  : !dark
                  ? styles.inactive
                  : styles.inactiveDark,
              ]}
            >
              {item.name}
            </Text>
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryFilter;
