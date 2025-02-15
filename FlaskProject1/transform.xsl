<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="text"/>

    <xsl:template match="/">
        <xsl:apply-templates select="theme/element"/>
    </xsl:template>

    <xsl:template match="element">
        <xsl:text></xsl:text>
        <xsl:value-of select="@name"/>

        <xsl:if test="@id != ''">
            <xsl:text>#</xsl:text>
            <xsl:value-of select="@id"/>
        </xsl:if>

        <xsl:if test="@class != ''">
            <xsl:text>.</xsl:text>
            <xsl:value-of select="@class"/>
        </xsl:if>

        <xsl:text> {&#10;</xsl:text>

        <!-- Handle colors -->
        <xsl:if test="color/@textColor != ''">
            <xsl:text>  color: </xsl:text>
            <xsl:value-of select="color/@textColor"/>
            <xsl:text>; &#10;</xsl:text>
        </xsl:if>
        <xsl:if test="color/@backgroundColor != ''">
            <xsl:text>  background-color: </xsl:text>
            <xsl:value-of select="color/@backgroundColor"/>
            <xsl:text>; &#10;</xsl:text>
        </xsl:if>
        <xsl:if test="color/@borderColor != ''">
            <xsl:text>  border-color: </xsl:text>
            <xsl:value-of select="color/@borderColor"/>
            <xsl:text>; &#10;</xsl:text>
        </xsl:if>

        <!-- Handle font properties -->
        <xsl:if test="police/@fontFamily != ''">
            <xsl:text>  font-family: </xsl:text>
            <xsl:value-of select="police/@fontFamily"/>
            <xsl:text>; &#10;</xsl:text>
        </xsl:if>
        <xsl:if test="police/@fontStyle != ''">
            <xsl:text>  font-style: </xsl:text>
            <xsl:value-of select="police/@fontStyle"/>
            <xsl:text>; &#10;</xsl:text>
        </xsl:if>
        <xsl:if test="police/@fontWeight != ''">
            <xsl:text>  font-weight: </xsl:text>
            <xsl:value-of select="police/@fontWeight"/>
            <xsl:text>; &#10;</xsl:text>
        </xsl:if>
        <xsl:if test="police/@textAlign != ''">
            <xsl:text>  text-align: </xsl:text>
            <xsl:value-of select="police/@textAlign"/>
            <xsl:text>; &#10;</xsl:text>
        </xsl:if>
        <xsl:if test="normalize-space(police/fontSize) != ''">
            <xsl:text>  width: </xsl:text>
            <xsl:value-of select="police/fontSize"/>
            <xsl:if test="police/width != 'auto'">
                <xsl:value-of select="police/fontSize/@unit"/>
            </xsl:if>
            <xsl:text>; &#10;</xsl:text>
        </xsl:if>

        <!-- Handle alignment properties -->
        <xsl:if test="normalize-space(alignement/width) != ''">
            <xsl:text>  width: </xsl:text>
            <xsl:value-of select="alignement/width"/>
            <xsl:if test="alignement/width != 'auto'">
                <xsl:value-of select="alignement/width/@unit"/>
            </xsl:if>
            <xsl:text>; &#10;</xsl:text>
        </xsl:if>
        <xsl:if test="normalize-space(alignement/height) != ''">
            <xsl:text>  height: </xsl:text>
            <xsl:value-of select="alignement/height"/>
            <xsl:if test="alignement/height != 'auto'">
                <xsl:value-of select="alignement/height/@unit"/>
            </xsl:if>
            <xsl:text>; &#10;</xsl:text>
        </xsl:if>
        <xsl:if test="normalize-space(alignement/margin) != ''">
            <xsl:text>  margin: </xsl:text>
            <xsl:value-of select="alignement/margin"/>
            <xsl:if test="alignement/margin != 'auto'">
                <xsl:value-of select="alignement/margin/@unit"/>
            </xsl:if>
            <xsl:text>; &#10;</xsl:text>
        </xsl:if>
        <xsl:if test="normalize-space(alignement/padding) != ''">
            <xsl:text>  padding: </xsl:text>
            <xsl:value-of select="alignement/padding"/>
            <xsl:if test="alignement/padding != 'auto'">
                <xsl:value-of select="alignement/padding/@unit"/>
            </xsl:if>
            <xsl:text>; &#10;</xsl:text>
        </xsl:if>

        <xsl:text>}&#10;&#10;</xsl:text>
    </xsl:template>
</xsl:stylesheet>
