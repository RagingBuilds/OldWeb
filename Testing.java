package me.AdrianG503.PrefixThingy;

import me.AdrianG503.PrefixThingy.PlayerListener;
import org.bukkit.plugin.PluginManager;
import org.bukkit.plugin.java.JavaPlugin;

public class Main extends JavaPlugin{

	private static Main instance;

	public void log(String string) {
        System.out.println(string);
    }
    
	public static Main getInstance(){
        return instance;
    }
        public void registerListeners(){
          PluginManager pm = getServer().getPluginManager();
          pm.registerEvents(new PlayerListener(this), this);
        }
        
        
        @Override
        public void onEnable(){
                getLogger().info("has been enabled!");
                instance = this;
                registerListeners();
                this.saveDefaultConfig();
        }
        
        @Override
        public void onDisable(){
                getLogger().info("has been disabled!");
                instance = null;
        }

}
