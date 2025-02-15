<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="text"/>

    <xsl:template match="/">
        <xsl:text>/* Fichier SCSS généré automatiquement */
</xsl:text>

        <xsl:apply-templates select="theme/element"/>
    </xsl:template>

    <xsl:template match="element">
        <xsl:text>
</xsl:text>
        <xsl:text>$</xsl:text>
        <xsl:value-of select="@name"/>
        <xsl:text>-color: "</xsl:text>
        <xsl:value-of select="color/textColor"/>
        <xsl:text>" ;
$</xsl:text>
        <xsl:value-of select="@name"/>
        <xsl:text>-bg-color: "</xsl:text>
        <xsl:value-of select="color/backgroundColor"/>
        <xsl:text> ";
$</xsl:text>
        <xsl:value-of select="@name"/>
        <xsl:text>-border-color: "</xsl:text>
        <xsl:value-of select="color/borderColor"/>
        <xsl:text> ";
$</xsl:text>
        <xsl:value-of select="@name"/>
        <xsl:text>-font-family: </xsl:text>
        <xsl:value-of select="police/fontFamily"/>
        <xsl:text>;
$</xsl:text>
        <xsl:value-of select="@name"/>
        <xsl:text>-font-style: </xsl:text>
        <xsl:value-of select="police/fontStyle"/>
        <xsl:text>;
$</xsl:text>
        <xsl:value-of select="@name"/>
        <xsl:text>-font-weight: </xsl:text>
        <xsl:value-of select="police/fontWeight"/>
        <xsl:text>;
$</xsl:text>
        <xsl:value-of select="@name"/>
        <xsl:text>-font-size: </xsl:text>
        <xsl:value-of select="police/fontSize"/>
        <xsl:text>;</xsl:text>
        <xsl:value-of select="police/fontSize/@unit"/>
        <xsl:text>;

</xsl:text>
        <xsl:value-of select="@name"/>
        <xsl:if test="@id">
            <xsl:text>#</xsl:text>
            <xsl:value-of select="@id"/>
        </xsl:if>
        <xsl:if test="@class">
            <xsl:text>.</xsl:text>
            <xsl:value-of select="@class"/>
        </xsl:if>
        <xsl:text> {
    color: $</xsl:text>
        <xsl:value-of select="@name"/>
        <xsl:text>-color;
    background-color: $</xsl:text>
        <xsl:value-of select="@name"/>
        <xsl:text>-bg-color;
    border-color: $</xsl:text>
        <xsl:value-of select="@name"/>
        <xsl:text>-border-color;
    font-family: $</xsl:text>
        <xsl:value-of select="@name"/>
        <xsl:text>-font-family;
    font-style: $</xsl:text>
        <xsl:value-of select="@name"/>
        <xsl:text>-font-style;
    font-weight: $</xsl:text>
        <xsl:value-of select="@name"/>
        <xsl:text>-font-weight;
    font-size: $</xsl:text>
        <xsl:value-of select="@name"/>
        <xsl:text>-font-size;
}
</xsl:text>
    </xsl:template>
</xsl:stylesheet>