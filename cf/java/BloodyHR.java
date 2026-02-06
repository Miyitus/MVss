/*
 * @(#)BloodyHR.java      
 *
 * Copyright (c) 1997 Masami Nakagawa
 *
 * Permission to use, copy, modify, and distribute this software
 * for NON-COMMERCIAL purpose and without fee is hereby granted. 
 */

import java.applet.Applet;
import java.awt.*;
import java.lang.Math;

/**
 * @author	NAKAGAWA Masami
 * @version	1.1, 12 May 1997
 */
public class BloodyHR extends Applet implements Runnable {
    Image offImage;
    Graphics offScreen;
    Image img;
    Image bgImage;
    Color bgColor = new Color(0xC0C0C0);
    Color hrColor = new Color(0xC0C0C0);
    Thread kicker;
    int bloodX;
    int bloodY;
    int bloodW;
    int bloodH;
    int hrHeight = 3;
    Dimension size;
    int small = 8;
    int big = 16;
    int auto = 0;
    int remainder;

    public void init() {
        String s = getParameter("image");
        if (s != null) img = getImage(getDocumentBase(), s);
        s = getParameter("bgImage");
        if (s != null) bgImage = getImage(getDocumentBase(), s);
        s = getParameter("bgColor");
        if (s != null) bgColor = new Color(Integer.parseInt(s, 16));
        s = getParameter("hrColor");
        if (s != null) hrColor = new Color(Integer.parseInt(s, 16));
        s = getParameter("hrHeight");
        if (s != null) hrHeight = Integer.parseInt(s);
        s = getParameter("small");
        if (s != null) small = Integer.parseInt(s);
        s = getParameter("big");
        if (s != null) big = Integer.parseInt(s);
        s = getParameter("auto");
        if (s != null) auto = Integer.parseInt(s) * 1000;
        size = size();
    	MediaTracker mt = new MediaTracker(this);
    	mt.addImage(img, 0);
    	if (bgImage != null) mt.addImage(bgImage, 0);
    	for (int i = small; i <= big; i++) {
    	    mt.addImage(img, i, i, 0);
    	}
    	try {
    	    mt.waitForID(0);
    	} catch(InterruptedException e) {
    	    e.printStackTrace();
    	}
    	offImage = createImage(size.width, size.height);
    	offScreen = offImage.getGraphics();
    	drawBackground(offScreen);
    }

    public void start() {
    	if(kicker==null) {
    	    kicker = new Thread(this);
    	    kicker.start();
    	}
    }

    public void stop() {
    	if(kicker!=null) {
    	    kicker.stop();
    	    kicker = null;
    	}
    }

    public void paint(Graphics g) {
    	g.drawImage(offImage, 0, 0, null);
    }

    public void update(Graphics g) {
    	paint(g);
    }

    public void run()  {
        Thread.currentThread().setPriority(Thread.NORM_PRIORITY - 3);
    	initParam();
    	offScreen.clipRect(0, hrHeight/2, size.width, size.height-2);
    	int wait = 100;
    	while(kicker != null) {
    	    if(bloodY < bloodH) {
        		bloodY++;
        		offScreen.drawImage(img, bloodX, bloodY, bloodW, bloodW, null);
        		wait = 100;
        		repaint(bloodX, bloodY, bloodW, bloodW);
    	    } else if(bloodW < big) {
        		bloodW++;
        		if(bloodW % 2 == 0) {
        		    bloodX--;
            		if (bloodW % 4 == 0) {
            		    bloodY++;
            		}
        		}
        		offScreen.drawImage(img, bloodX, bloodY, bloodW, bloodW, null);
        		wait = 200;
        		repaint(bloodX, bloodY, bloodW, bloodW);
    	    }
    	    try {
        		Thread.currentThread().sleep(wait);
    	    } catch(InterruptedException e) {
    	        e.printStackTrace();
    	    }
    	    remainder -= wait;
    	    if (auto > 0 && remainder <= 0) {
    	        initParam();
    	    }
    	}
    }

    public boolean mouseExit(Event evt, int x, int y) {
    	if(y < size.height/2) {
    	    initParam(x);
    	}
    	return true;
    }

    public boolean mouseEnter(Event evt, int x, int y) {
    	if(y < size.height/2) {
    	    initParam(x);
    	}
    	return true;
    }
    
    void fillImage(Graphics g, Image img) {
        int w = img.getWidth(null);
        int h = img.getHeight(null);
        if (w > 0 && h > 0) {
            for (int x = 0; x < size.width; x+=w) {
                for (int y = 0; y < size.height; y+=h) {
                    g.drawImage(img, x, y, null);
                }
            }
        }
    }
    
    void drawBackground(Graphics g) {
    	g.setColor(bgColor);
    	g.fillRect(0, 0, size.width, size.height);
    	if (bgImage != null) {
    	    fillImage(g, bgImage);
    	}
    	g.setColor(hrColor);
    	g.draw3DRect(0, 0, size.width-1, hrHeight-1, false);
    }

    void initParam() {
    	initParam((int)(Math.random()*(size.width-big+(big-small)/2)));
    }

    void initParam(int x) {
    	bloodX = x;
    	bloodW = small;
    	bloodY = hrHeight-small/2-1;
    	int h = size.height-big-big/2;
    	bloodH = (int)(Math.random()*h);
    	remainder = (int)(Math.random() * auto);
    }
}